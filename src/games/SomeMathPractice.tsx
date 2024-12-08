import styled from "@emotion/styled"
import MinuteTimer from "../components/MinuteTimer"
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { useState, useEffect } from "react";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";


export default function SomeMathPractice() {

    const [level, setLevel] = useState(getCompletedGame(MiniGameTitles.MakeItPop) + 1);
    const [showModal, setShowModal] = useState(false);

    const symbolOptions = ["+", "-", "*"];
    const generateRandomSymbol = () => {
        return symbolOptions[Math.floor(Math.random() * symbolOptions.length)];
    };

    const generateRandomNumber = () => {
        if (symbol === "*") {
            return Math.floor(Math.random() * 100) + 5;
        }
        return Math.floor(Math.random() * 10000) + 100;
    };


    const [symbol, setSymbol] = useState(generateRandomSymbol());
    const [number1, setNumber1] = useState(generateRandomNumber());
    const [number2, setNumber2] = useState(generateRandomNumber());
    const [clickedCorrectSquare, setClickedCorrectSquare] = useState(false);


    const solutionNumber = eval(`${number1} ${symbol} ${number2}`);




    const generateSolutionSquares = () => {
        const solutions = Array(9)
            .fill(null)
            .map(() =>
                solutionNumber +
                (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 100)
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
            setCompletedGame(MiniGameTitles.SomeMathPractice, level);
            setShowModal(true);
        }
    }, [clickedCorrectSquare]);


    return (
        <SomeMathPracticeWrapper>
            <MinuteTimer title={MiniGameTitles.SomeMathPractice} level={level} resetAfterTimeout={!showModal} />

            <div className="equationWrapper">
                <div className="equation">
                    <div className="equationSquare">{number1}</div>
                    <div className="equationSymbol">{symbol}</div>
                    <div className="equationSquare">{number2}</div>
                </div>
                <div className="equalSign">=</div>

                <div className="solutionBox">



                    {solutionSquares.map((num, index) => (
                        <div
                            key={index}
                            className="solutionSquare"
                            onClick={() => {

                                if (num === solutionNumber) {
                                    setClickedCorrectSquare(true);
                                    setCompletedGame(MiniGameTitles.SomeMathPractice, level);

                                }
                                else {
                                    setClickedCorrectSquare(false);
                                    location.reload()

                                }


                            }
                            }
                        >
                            {num}
                        </div>
                    ))}




                </div>
            </div>

            {showModal && <VictoryModal level={level} newLevelBtnClicked={() => {
                setLevel(level + 1);
                setShowModal(false);
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
}

.equation {
    display: flex;
    gap: 10px;
}

.equationSquare {
    text-align: center;
    color: white;
    height: 150px;
    width: 150px;
    background-color: #636363;
    border: 1px solid white;
    display: inline-block;
    transition: background-color 0.1s ease;
}

.equationSymbol {
    font-size: 3rem;
    margin: 0 20px;
    margin-top: 50px;
}

.solutionBox {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    gap: 10px;
}

.solutionSquare {
    text-align: center;
    color: white;
    height: 100px;
    width: 100px;
    background-color: #636363;
    border: 1px solid white;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.1s ease;
}

.equalSign {
    font-size: 3rem;
    margin: 0 40px;
}
`