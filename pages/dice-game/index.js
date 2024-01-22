import styled from "styled-components";
import GameCard from "@/components/GameCard";
import { useState } from "react";
import useSWR from "swr";
import { SCENARIOS } from "@/utils/scenarios";

export default function DiceGamePage({ isFavorite, toggleFavorite }) {
  const { data } = useSWR("/api/games");
  const [currentStory, setCurrentStory] = useState(null);
  const [suggestedGame, setSuggestedGame] = useState(null);

  const [d20, setd20] = useState(null); //d20 is a conventional way to name 20 sided dice

  const today = new Date().getDay();
  const intro = SCENARIOS[today].intro; //pick different story every day

  function rollDice() {
    setd20((prevD20) => {
      const newD20 = Math.floor(Math.random() * 20) + 1;   //choose 20 possible dice rolls to 7 different outcome

      const d20result =
        newD20 === 1
          ? "unworthy"
          : newD20 >= 2 && newD20 <= 4
          ? "criticalFail"
          : newD20 >= 5 && newD20 <= 8
          ? "fail"
          : newD20 >= 9 && newD20 <= 12
          ? "neutral"
          : newD20 >= 13 && newD20 <= 16
          ? "success"
          : newD20 >= 17 && newD20 <= 19
          ? "criticalSuccess"
          : newD20 === 20 && "godlike";

      const outcomeTitle =
        d20result.toUpperCase().replace("CRITICAL", "CRITICAL ") + "!"; 
      const outcomeText = SCENARIOS[today].outcome[d20result];            //choose 1 outcome with title and text according to dice roll

      getRandomGame(data);

      setCurrentStory({
        d20: newD20,
        outcomeTitle: outcomeTitle,  // Set the current story to the chosen outcome
        outcomeText: outcomeText,
      });

      return newD20; // Return the updated value for the state
    });
  }

  function getRandomGame(data) {
    let randomGame = data[Math.floor(Math.random() * data.length)]; // get a random game from database

    const alreadyFavorite = isFavorite(randomGame._id); // check if it's already favorited

    do {
      randomGame = data[Math.floor(Math.random() * data.length)];
    } while (alreadyFavorite === true); // if it's already favorited, get a new game until finding a non-favorited game

    setSuggestedGame(randomGame);
  }

  function restartGame() {
    setCurrentStory(null);
    setSuggestedGame(null);
  }

  return (
    <DiceGameContainer>
      <IntroText>{intro}</IntroText>

      {currentStory ? (
        <StoryContainer>
          <p>You rolled: {currentStory.d20}</p>
          <p>{currentStory.outcomeTitle}</p>
          <p>{currentStory.outcomeText}</p>
        </StoryContainer>
      ) : (
        <button onClick={rollDice}>Roll Dice?</button>
      )}

      {suggestedGame && (
        <>
          <GameCard
            game={suggestedGame}
            isFavorite={isFavorite}
            toggleFavorite={() => toggleFavorite(suggestedGame._id)}
          />
          <button onClick={restartGame}>Restart</button>
        </>
      )}
    </DiceGameContainer>
  );
}

const DiceGameContainer = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-block: 10px;
  }

  button {
    padding: 5px;
    margin-block: 10px;
  }
`;

const IntroText = styled.p`
  font-size: large;
  font-weight: bold;
`;

const StoryContainer = styled.section`
  text-align: center;
`