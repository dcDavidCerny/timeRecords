import { useState, useEffect } from "react";

import styled from "@emotion/styled"

export default function MinuteTimer() {
    const [timer, setTimer] = useState<number>(60);

    if (timer === 0) {

        location.reload();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => Math.max(prev - 1, 0));


        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <MinuteTimerWrapper>
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