import styled from "styled-components";
import GameCard from "@/components/GameCard";
import { useState } from "react";
import useSWR from "swr";
import { SCENARIOS } from "@/utils/scenarios";

export default function DiceGamePage({
  isFavorite,
  toggleFavorite,
  localGameData,
}) {
  const { data } = useSWR("/api/games");
  const [currentStory, setCurrentStory] = useState(null);
  const [suggestedGame, setSuggestedGame] = useState(null);

  const [d20, setd20] = useState(null); //d20 is a conventional way to name 20 sided dice

  const today = new Date().getDay();
  const intro = SCENARIOS[today].intro; //pick different story every day

  function rollDice() {
    const roll = Math.ceil(Math.random() * 20); //choose 20 possible dice rolls to 7 different outcome

    setd20(roll);

    const d20result =
      roll === 1
        ? "unworthy"
        : roll >= 2 && roll <= 4
        ? "criticalFail"
        : roll >= 5 && roll <= 8
        ? "fail"
        : roll >= 9 && roll <= 12
        ? "neutral"
        : roll >= 13 && roll <= 16
        ? "success"
        : roll >= 17 && roll <= 19
        ? "criticalSuccess"
        : roll === 20 && "godlike";

    const outcomeTitle = SCENARIOS[today].outcome[d20result].title;
    const outcomeText = SCENARIOS[today].outcome[d20result].text;

    getRandomGame(data);

    setCurrentStory({
      d20: roll,
      outcomeTitle: outcomeTitle, // Set the current story to the chosen outcome
      outcomeText: outcomeText,
    });
  }

  function getRandomGame(data) {
    const favoriteGames = localGameData
      .filter((game) => game.isFavorite)
      .map((game) => game.id);

    const nonFavoriteGames = data.filter(
      (game) => !favoriteGames.includes(game._id)
    );

    setSuggestedGame(
      nonFavoriteGames[Math.floor(Math.random() * nonFavoriteGames.length)]
    );
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

const DiceGameContainer = styled.div`
  padding: 1rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  color: #ddd;
`;

const IntroText = styled.p`
  font-weight: bold;
`;

const StoryContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
