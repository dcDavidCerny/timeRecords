import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import MinuteTimer from "../components/MinuteTimer";
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";

const GAME_TITLE = MiniGameTitles.PairsMemory;

const cards = ["😁", "😆", "😅", "🤣", "😭", "🥰", "😉", "😂", "😁", "😆", "😅", "🤣", "😭", "🥰", "😉", "😂"];
// generate pairs memory cards with random symbols, 16 cards, 8 pairs
const generateRandomCards = () => {
    // randomize array order
    const shuffledCards = cards.map(n => n).sort(() => Math.random() - 0.5);
    return shuffledCards;
}

export const PairsMemory = () => {
    const [level, setLevel] = useState(Math.min(getCompletedGame(MiniGameTitles.PairsMemory) + 1, 6));
    const [showModal, setShowModal] = useState(false);


    const [cards, setCards] = useState(generateRandomCards());
    const [showCards, setShowCards] = useState(true);

    const [revealedCard, setRevealedCard] = useState<number | null>(null);


    useEffect(() => {
        if (showCards) {
            setTimeout(() => {
                setShowCards(false);
                setRevealedCard(Math.floor(Math.random() * cards.length));
            }, 7000 - (level * 1000));
        }
    }, [showCards]);


    const handleCardClick = (index: number) => {
        if (revealedCard === null) {
            return;
        }
        console.log("clicked card", cards[index]);
        const revealedCardSymbol = cards[revealedCard];
        const clickedCardSymbol = cards[index];
        if (revealedCardSymbol === clickedCardSymbol && index !== revealedCard) {
            setCompletedGame(GAME_TITLE, level);
            setShowModal(true);
            console.log("pair found");
        } else {
            console.log("pair not found");
        }
    }






    return (
        <PairsMemoryWrapper>

            <div className="timerDiv">
                <MinuteTimer title={MiniGameTitles.PairsMemory} level={level} resetAfterTimeout={!showModal} />
            </div>

            <div className="cardsWrapper">
                {cards.map((card, index) => (
                    <div key={index} className="card" onClick={() => handleCardClick(index)}>
                        {(showCards || index === revealedCard) ? card : "?"}
                    </div>
                ))}
            </div>








            {showModal && <VictoryModal level={level} title={GAME_TITLE} newLevelBtnClicked={() => {
                if (level < 6) {
                    setLevel(level + 1);
                }
                setShowCards(true);
                setCards(generateRandomCards());
                setShowModal(false);
            }} />}
        </PairsMemoryWrapper>
    )
}

const PairsMemoryWrapper = styled.div`
    .cardsWrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        max-width: max-content;
        border: 10px solid transparent;
        border-image: linear-gradient(45deg, #f3ec78, #af4261) 1;
        border-radius: 10px;
        padding: 10px;
        position: relative;
        animation: rotateBorder 5s linear infinite;
        background-color: #f3ff33;
    }

    .card {
        height: 100px;
        width: 100px;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        cursor: pointer;
    }

    .timerDiv {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10vh;
    }

    @keyframes rotateBorder {
        0% {
            border-image-source: linear-gradient(0deg, #f3ff33, #00c3ff);
            /* rotate: 0deg; adds for level 6*/
        }

        50% {
            border-image-source: linear-gradient(360deg, #00c3ff, #f3ff33);
        }
        100% {
            border-image-source: linear-gradient(0deg, #f3ff33, #00c3ff);
        /* rotate: 360deg; adds for level 6*/
        }
    }
`