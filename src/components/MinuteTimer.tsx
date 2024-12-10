import { useState, useEffect } from "react";

import styled from "@emotion/styled"
import { MiniGameTitles } from "../pages/MiniGamesCollection";



interface Props {
    title: MiniGameTitles;
    level: number;
    resetAfterTimeout: boolean;
}

export default function MinuteTimer({ title, level, resetAfterTimeout }: Props) {
    const [timer, setTimer] = useState<number>(60);

    if (timer === 0 && resetAfterTimeout) {

        location.reload();
    }

    useEffect(() => {
        // lvl 1: 60s; lvl 2: 50s; lvl 3: 40s; lvl 4: 30s; lvl 5: 20s; lvl 6: 10s
        const newTimer = 700 - (level * 10);
        setTimer(newTimer);
    }, [level]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => Math.max(prev - 1, 0));


        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <MinuteTimerWrapper>
            <h1>{title} - level: {level}</h1>
            <div className="timer">{timer}</div>
        </MinuteTimerWrapper>
    )
}

const MinuteTimerWrapper = styled.div`

.timer {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }
`