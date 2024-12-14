import { useState, useEffect } from "react";

import styled from "@emotion/styled"
import { MiniGameTitles } from "../pages/MiniGamesCollection";

interface Props {
    title: MiniGameTitles;
    level: number;
    onOffSwitch: boolean;
    onTimerRunOut: () => void;
}

export default function MinuteTimer({ title, level, onOffSwitch, onTimerRunOut }: Props) {
    const [timer, setTimer] = useState<number>(60);


    useEffect(() => {
        // lvl 1: 60s; lvl 2: 50s; lvl 3: 40s; lvl 4: 30s; lvl 5: 20s; lvl 6: 10s
        const newTimer = 70 - (level * 10);
        setTimer(newTimer);

    }, [level]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (onOffSwitch) {
                setTimer((prev) => Math.max(prev - 1, 0));
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [onOffSwitch]);

    useEffect(() => {
        if (timer === 0) {
            onTimerRunOut();
            const newTimer = 70 - (level * 10);
            setTimer(newTimer);
        }
    }, [timer]);


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