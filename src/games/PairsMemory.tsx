import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import MinuteTimer from "../components/MinuteTimer";
import { getCompletedGame, setCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";
import { VictoryModal } from "../components/VictoryModal";

const cards = ["😁", "😆", "😅", "🤣", "😭", "🥰", "😉", "😂", "😁", "😆", "😅", "🤣", "😭", "🥰", "😉", "😂"];
// generate pairs memory cards with random symbols, 16 cards, 8 pairs
const generateRandomCards = () => {
    // randomize array order
    const shuffledCards = cards.map(n => n).sort(() => Math.random() - 0.5);
    return shuffledCards;
}

export const PairsMemory = () => {
    const [level, setLevel] = useState(getCompletedGame(MiniGameTitles.PairsMemory) + 1);
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
            setCompletedGame(MiniGameTitles.PairsMemory, level);
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








            {showModal && <VictoryModal level={level} newLevelBtnClicked={() => {
                if (level < 6) {
                    setLevel(level + 1);
                }
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
        max-width: 400px;
        margin: 0 auto;
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
`