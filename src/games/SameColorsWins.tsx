import { useState } from "react";
import styled from "@emotion/styled"
import MinuteTimer from "../components/MinuteTimer";
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";

const GAME_TITLE = MiniGameTitles.SameColorsWins;

export default function SameColorsWins() {

    const [level, setLevel] = useState(Math.min(getCompletedGame(MiniGameTitles.SameColorsWins) + 1, 6));

    const [showModal, setShowModal] = useState(false);

    const colorOptions = [
        "#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#3a0436",
        "#33FFF3", "#F333FF", "#000000", "#ffffff", "#ffae00"
    ];

    const generateRandomColor = (currentColor?: string) => {
        let newColor;
        do {
            newColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        } while (newColor === currentColor);
        return newColor;
    };

    const initialColors = Array(15).fill(null).map(() => generateRandomColor());
    const [squareColors, setSquareColors] = useState(initialColors);

    const handleSquareClick = (index: number) => {
        const newColors = [...squareColors];
        const currentColor = newColors[index];
        newColors[index] = generateRandomColor(currentColor);
        setSquareColors(newColors);

        // Check if all squares have the same color
        if (newColors.every(color => color === newColors[0])) {
            setTimeout(() => {
                if (newColors.every(color => color === newColors[0])) {
                    // win result for each game
                    setCompletedGame(GAME_TITLE, level);
                    setShowModal(true);

                }
            }, 300);
        }
    };


    return (
        <SameColorsWinsWrapper>
            <MinuteTimer title={GAME_TITLE} level={level} resetAfterTimeout={!showModal} />

            <div className="SquareWrapper">
                {squareColors.map((color, index) => (
                    <div
                        key={index}
                        className="Square"
                        style={{ backgroundColor: color }}
                        onClick={() => handleSquareClick(index)}
                    ></div>
                ))}
            </div>


            {showModal && <VictoryModal level={level} title={GAME_TITLE} newLevelBtnClicked={() => {
                if (level < 6) {
                    setLevel(level + 1);
                }
                setSquareColors(initialColors);
                setShowModal(false);
            }} />}
        </SameColorsWinsWrapper>
    )
}

const SameColorsWinsWrapper = styled.div`
text-align: center;

.Square {
    height: 175px;
    width: 175px;
    background-color: black;
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
        transition: background-color 0.1s ease;
}

.SquareWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    max-width: 1000px;
    margin: 0 auto;
    gap: 10px;
    border: 1px solid white;
    margin-top: 30px;
}
`;