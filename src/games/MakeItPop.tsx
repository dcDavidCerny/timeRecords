import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import MinuteTimer from "../components/MinuteTimer";
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";

export default function MakeItPop() {
    const [level, setLevel] = useState(Math.min(getCompletedGame(MiniGameTitles.MakeItPop) + 1, 6));
    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState(0);
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
            setCompletedGame(MiniGameTitles.MakeItPop, level);
            setShowModal(true);
        }
    }, [number]);


    return (


        <MakeItPopWrapper>
            <div className="timerDiv">
                <MinuteTimer title={MiniGameTitles.MakeItPop} level={level} resetAfterTimeout={!showModal} />
            </div>
            <div className="circle" onClick={handleCircleClick}>
                <div className="insideCircle" style={{
                    height: size,
                    width: size
                }}>
                    {Math.round(number)}
                </div>
            </div>


            {showModal && <VictoryModal level={level} newLevelBtnClicked={() => {

                if (level < 6) {
                    setLevel(level + 1);
                }
                setNumber(0);
                setShowModal(false);
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