import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import MinuteTimer from "../components/MinuteTimer";
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";
import { LostModal } from "../components/LostModal";

const GAME_TITLE = MiniGameTitles.MakeItPop;
const STARTING_NUMBER = 5;
export default function MakeItPop() {
    const [timer, setTimer] = useState<number>(60);

    const [level, setLevel] = useState(Math.min(getCompletedGame(MiniGameTitles.MakeItPop) + 1, 6));
    const [showVictoryModal, setShowVictoryModal] = useState(false);
    const [showLossModal, setShowLossModal] = useState(false);
    const [number, setNumber] = useState(STARTING_NUMBER);
    const size = (number * 9) + 50;
    const handleCircleClick = () => {
        setNumber(number + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((prev) => Math.min(prev - (prev / 800), 50));
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (number === 50) {
            setCompletedGame(GAME_TITLE, level);
            setShowVictoryModal(true);
        }
        if (number < 0.46) {
            setShowLossModal(true);
        }
    }, [number]);




    return (


        <MakeItPopWrapper>
            <div className="timerDiv">
                <MinuteTimer title={GAME_TITLE} level={level} onOffSwitch={showLossModal || showVictoryModal ? false : true} onTimerRunOut={() => {
                    setShowLossModal(true);

                }} />
            </div>
            <div className="circle" onClick={handleCircleClick}>
                <div className="insideCircle" style={{
                    height: size,
                    width: size
                }}>
                    {Math.round(number)}
                </div>
            </div>


            {showVictoryModal && <VictoryModal level={level} title={GAME_TITLE} newLevelBtnClicked={() => {

                if (level < 6) {
                    setLevel(level + 1);
                }
                setNumber(STARTING_NUMBER);
                setShowVictoryModal(false);
                setTimer(10);
            }} />}

            {showLossModal && <LostModal level={level} title={GAME_TITLE} restartLevelBtnClicked={() => {
                setNumber(STARTING_NUMBER);
                setShowLossModal(false);
                setTimer(10);
            }} />}
        </MakeItPopWrapper>
    )
}

const MakeItPopWrapper = styled.div`

    
    .timerDiv {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10vh;
    }
    .circle {
        border: 1px solid white;
        height: 500px;
        width: 500px;
        border-radius: 50%;
        background-color: #f3ff33;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        color: #3a0436;
        cursor: pointer;
        .insideCircle {
            border: 1px solid white;
            background-color: #00c3ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }
    }
`