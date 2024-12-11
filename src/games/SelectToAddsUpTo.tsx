import styled from "@emotion/styled"
import { useState } from "react";
import MinuteTimer from "../components/MinuteTimer";
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";

const GAME_TITLE = MiniGameTitles.SelectToAddsUpTo;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const generateRandomNumbers = () => {
    const shuffledNumbers = numbers.map(n => n).sort(() => Math.random() - 0.5);
    return shuffledNumbers;
}

export default function DontMakeItPop() {
    const [level, setLevel] = useState(Math.min(getCompletedGame(MiniGameTitles.SelectToAddsUpTo) + 1, 6));
    const [showModal, setShowModal] = useState(false);

    const [numbers, setNumbers] = useState(generateRandomNumbers());

    const [resultNumber, setResultNumber] = useState(Math.floor(Math.random() * 53) + 1);

    const [selectedSquare, setSelectedSquare] = useState<number[]>([]);


    const numberClass = "number";

    return (
        <DontMakeItPopWrapper>
            <div className="timerDiv">
                <MinuteTimer title={GAME_TITLE} level={level} resetAfterTimeout={!showModal} />
            </div>

            <div className="resultNumber">
                {resultNumber}
            </div>
            <div className="numbers">
                {numbers.map((n, i) => (
                    <div key={i} className={`${numberClass} ${selectedSquare.includes(i) ? "selectedSquare" : ""}`} onClick={() => {
                        if (selectedSquare.includes(i)) {
                            setSelectedSquare(selectedSquare.filter(s => s !== i));
                        } else {
                            setSelectedSquare([...selectedSquare, i]);
                        }
                    }}>
                        {n}
                    </div>
                ))}
            </div>

            <button className="btn" onClick={() => {
                const selectedNumbers = selectedSquare.map(i => numbers[i]);
                console.log(selectedNumbers);
                if (selectedNumbers.reduce((a, b) => a + b, 0) === resultNumber) {
                    setCompletedGame(GAME_TITLE, level);
                    setShowModal(true);
                } else {
                    setSelectedSquare([]);
                }
            }
            }>I got it!</button>


            {showModal && <VictoryModal level={level} title={GAME_TITLE} newLevelBtnClicked={() => {
                if (level < 6) {
                    setLevel(level + 1);
                    setResultNumber(Math.floor(Math.random() * 53) + 1);
                }
                setNumbers(generateRandomNumbers());
                setShowModal(false);
                setSelectedSquare([]);
                setResultNumber(Math.floor(Math.random() * 53) + 1);
            }} />}
        </DontMakeItPopWrapper>
    )
}

const DontMakeItPopWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    .timerDiv {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10vh;
    }

    .resultNumber {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 20px;
        background: linear-gradient(to right, #00c3ff, #f3ff33);
        padding: 5px;
        border-radius: 20px;
        width: 85px;
        color: rgba(0, 0, 0, 0.8);
    }
    .numbers {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        background-color: #f3ff33;
        padding: 15px;
        border-radius: 20px;
    }
    .number {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            width: 100px;
            background-color: rgba(0, 195, 255, 0.8);
            border-radius: 10px;
            font-size: 2rem;
            cursor: pointer;
            user-select: none;
        }

        .selectedSquare {
            background-color: rgba(0, 195, 255, 1);

        }

        .btn {
            width: 100%;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #00c3ff;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.5rem;
            transition: color 1s ease;
            &:hover {
                background-color: #f3ff33;
                color: black;
            }
        }


    
`;