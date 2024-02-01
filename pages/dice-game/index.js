import styled from "styled-components";
import GameCard from "@/components/GameCard";
import { useState } from "react";
import useSWR from "swr";
import { SCENARIOS } from "@/utils/scenarios";
import { GiRollingDices } from "react-icons/gi";
import { VscDebugRestart } from "react-icons/vsc";

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
    rollDice();
  }

  return (
    <DiceGameSection>
      {!d20 && <IntroText>{intro}</IntroText>}{" "}
      {currentStory && (
        <StoryContainer>
          <StyledRolledSection>
            <StyledResultDiv>
              <StyledRoller>
                <GiRollingDices />
                {currentStory.d20}
              </StyledRoller>
              <StyledOutcomeTitle>
                {currentStory.outcomeTitle}
              </StyledOutcomeTitle>
            </StyledResultDiv>
            <StyledRollButton onClick={restartGame}>
              Roll <VscDebugRestart />
            </StyledRollButton>
          </StyledRolledSection>
          {suggestedGame && (
            <>
              <GameCard
                game={suggestedGame}
                isFavorite={isFavorite}
                toggleFavorite={() => toggleFavorite(suggestedGame._id)}
              />
            </>
          )}
          <StyledOutcomeText>{currentStory.outcomeText}</StyledOutcomeText>
        </StoryContainer>
      )}
      {!d20 && (
        <StyledRollDiceButton onClick={rollDice}>
          Roll Dice
          <GiRollingDices style={{ fontSize: "30px" }} />
        </StyledRollDiceButton>
      )}
    </DiceGameSection>
  );
}
const DiceGameSection = styled.section`
  background: linear-gradient(to bottom right, #4231cc, #32bea6);
  height: 100%;
  min-height: 100vh;
  padding: 100px 5%;
`;

const IntroText = styled.p`
  color: #3a3a3a;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin: auto;
  padding: 20px;
  background: #fafafa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledRolledSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  color: white;
`;

const StyledResultDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledRoller = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 40px;
`;
const StyledOutcomeTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const StyledRollButton = styled.button`
  display: flex;
  border-radius: 100px;
  border: 1px solid white;
  padding: 20px;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const StyledOutcomeText = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.5;
  letter-spacing: 1.5px;
  background: #fafafa;
  padding: 20px;
  border-radius: 20px;
`;

const StyledRollDiceButton = styled.button`
  display: flex;
  border-radius: 20px;
  border: none;
  margin: auto;
  padding: 10px 20px;
  align-items: center;
  gap: 4px;
  margin-top: 50%;
  font-size: 20px;
  background: linear-gradient(to right, #4231cc, #32bea6);
  color: white;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;
