import styled from "@emotion/styled"
import MinuteTimer from "../components/MinuteTimer"
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { useState, useEffect } from "react";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";
import { LostModal } from "../components/LostModal";

const GAME_TITLE = MiniGameTitles.SomeMathPractice;

export default function SomeMathPractice() {

    const [level, setLevel] = useState(Math.min(getCompletedGame(MiniGameTitles.SomeMathPractice) + 1, 6));

    const [showVictoryModal, setShowVictoryModal] = useState(false);

    const [showLossModal, setShowLossModal] = useState(false);

    const symbolOptions = ["+", "-", "*"];
    const generateRandomSymbol = () => {
        return symbolOptions[Math.floor(Math.random() * symbolOptions.length)];
    };

    const generateRandomNumber = (level: number, symbol: string) => {
        if (symbol === "*") {
            switch (level) {
                case 1:
                    return Math.floor(Math.random() * 5) + 1;
                case 2:
                    return Math.floor(Math.random() * 10) + 1;
                case 3:
                    return Math.floor(Math.random() * 15) + 2;
                case 4:
                    return Math.floor(Math.random() * 20) + 5;
                case 5:
                    return Math.floor(Math.random() * 50) + 10;
                case 6:
                    return Math.floor(Math.random() * 100) + 15;
                default:
                    throw new Error("Invalid level: " + level);
            }
        } else {

            switch (level) {
                case 1:
                    return Math.floor(Math.random() * 50) + 10;
                case 2:
                    return Math.floor(Math.random() * 200) + 50;
                case 3:
                    return Math.floor(Math.random() * 500) + 100;
                case 4:
                    return Math.floor(Math.random() * 1000) + 500;
                case 5:
                    return Math.floor(Math.random() * 5000) + 1000;
                case 6:
                    return Math.floor(Math.random() * 20000) + 10000;
                default:
                    throw new Error("Invalid level: " + level);

            }
        }
    };


    const [symbol, setSymbol] = useState(generateRandomSymbol());
    const [number1, setNumber1] = useState(generateRandomNumber(level, symbol));
    const [number2, setNumber2] = useState(generateRandomNumber(level, symbol));
    const [clickedCorrectSquare, setClickedCorrectSquare] = useState(false);


    const solutionNumber = eval(`${number1} ${symbol} ${number2}`) as number;




    const generateSolutionSquares = () => {
        const solutions = Array(9)
            .fill(null)
            .map(() => solutionNumber + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 100)
            );
        const randomIndex = Math.floor(Math.random() * 10);
        solutions.splice(randomIndex, 0, solutionNumber); // Insert the correct solution at a random index
        return solutions;
    };

    const [solutionSquares, setSolutionSquares] = useState(generateSolutionSquares);

    useEffect(() => {
        setSolutionSquares(generateSolutionSquares()); // Regenerate solutions if needed (e.g., on page load or other triggers)
    }, [number1, number2, symbol]); // Update if these values change

    useEffect(() => {
        if (clickedCorrectSquare) {


            setCompletedGame(GAME_TITLE, level);
            setShowVictoryModal(true);
        }
    }, [clickedCorrectSquare]);


    return (
        <SomeMathPracticeWrapper>
            <MinuteTimer title={GAME_TITLE} level={level} onOffSwitch={showLossModal || showVictoryModal ? false : true} onTimerRunOut={() => {
                setShowLossModal(true);

            }} />

            <div className="equationWrapper">
                <div className="equation">
                    <div className="equationSquare">{number1}</div>
                    <div className="equationSymbol">{symbol}</div>
                    <div className="equationSquare">{number2}</div>
                </div>
                <div className="equationSymbol equalSign">=</div>

                <div className="solutionBox">



                    {solutionSquares.map((num, index) => (
                        <div
                            key={index}
                            className="solutionSquare"
                            onClick={() => {

                                if (num === solutionNumber) {
                                    setClickedCorrectSquare(true);
                                    setShowVictoryModal(true);
                                    setCompletedGame(GAME_TITLE, level);

                                }
                                else {
                                    setClickedCorrectSquare(false);
                                    setShowLossModal(true);

                                }


                            }
                            }
                        >{num}
                        </div>
                    ))}




                </div>
            </div>

            {showVictoryModal && <VictoryModal level={level} title={GAME_TITLE} newLevelBtnClicked={() => {
                if (level < 6) {
                    setLevel(level + 1);
                }
                setClickedCorrectSquare(false);
                const symbol = generateRandomSymbol();
                setSymbol(symbol);
                setNumber1(generateRandomNumber(level, symbol));
                setNumber2(generateRandomNumber(level, symbol));
                setSolutionSquares(generateSolutionSquares());
                setShowVictoryModal(false);
            }} />}

            {showLossModal && <LostModal level={level} title={GAME_TITLE} restartLevelBtnClicked={() => {
                setClickedCorrectSquare(false);
                const symbol = generateRandomSymbol();
                setSymbol(symbol);
                setNumber1(generateRandomNumber(level, symbol));
                setNumber2(generateRandomNumber(level, symbol));
                setSolutionSquares(generateSolutionSquares());
                setShowLossModal(false);
                setLevel(level);
            }} />}

        </SomeMathPracticeWrapper>
    )
}

const SomeMathPracticeWrapper = styled.div`
text-align: center;

.equationWrapper {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: #00c3ff;
    padding-left: 40px;
    border: 3px solid #dbee07;
}

.equation {
    display: flex;
    gap: 10px;
}

.equationSquare {
    text-align: center;
    /* make a color black with 0.5alpha */
    color: rgba(0, 0, 0, 0.8);
    font-weight: 700;
    height: 150px;
    width: 150px;
    background-color: #dbee07;
    display: inline-block;
    line-height: 150px; /* Match container height */
}

.equationSymbol {
    font-size: 3rem;
    margin: 0 20px;
    margin-top: 50px;
    color: #dbee07;
    font-weight: 700;
}

.solutionBox {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    gap: 10px;
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #dbee07;
    border: 3px solid #00c3ff;;
}

.solutionSquare {
    text-align: center;
    color: white;
    height: 100px;
    width: 100px;
    background-color: #00c3ff;
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.1s ease;
    line-height: 100px;
}

.equalSign {
    font-size: 3rem;
    margin: 0 40px;
}
`