import MiniGame from "../components/MiniGame"

export const MiniGamesCollection = () => {
    return (
        <>
            <MiniGame title="same colors wins" description="Some nice game I developped in 5 mins so I can make some description?" completed={true} imgSrc="/sameColorsWins.png" />
            <MiniGame title="make it pop" description="Some nice game I developped in 5 mins so I can make some description?" completed={false} />
            <MiniGame title="some math practice" description="Some nice game I developped in 5 mins so I can make some description?" completed={false} />
            <MiniGame title="aaaaaa" description="Some nice game I developped in 5 mins so I can make some description?" completed={false} />
            <MiniGame title="aaaaaa" description="Some nice game I developped in 5 mins so I can make some description?" completed={false} />
        </>
    )
}