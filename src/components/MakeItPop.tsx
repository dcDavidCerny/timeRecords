import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import MinuteTimer from "./MinuteTimer";
export default function MakeItPop() {
    const [number, setNumber] = useState(0);
    const size = (number * 9) + 50;
    const handleCircleClick = () => {
        setNumber(number + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((prev) => Math.min(prev - Math.floor((prev / 7)), 50));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (


        <MakeItPopWrapper>
            <div className="timerDiv">
                <h1>Make it reach 50</h1>
                <MinuteTimer />
            </div>
            <div className="circle" onClick={handleCircleClick}>
                <div className="insideCircle" style={{
                    height: size,
                    width: size
                }}>
                    {number}
                </div>
            </div>



        </MakeItPopWrapper>
    )
}

const MakeItPopWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .timerDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
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
            background-color: #04ff9f;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`