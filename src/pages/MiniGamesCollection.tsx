import MiniGame from "../components/MiniGame"

export const MiniGamesCollection = () => {
    return (
        <>
            <MiniGame title={MiniGameTitles.SameColorsWins} description="Some nice game I developped in 5 mins so I can make some description?" imgSrc="/sameColorsWins.png" />
            <MiniGame title={MiniGameTitles.MakeItPop} description="Some nice game I developped in 5 mins so I can make some description?" />
            <MiniGame title={MiniGameTitles.SomeMathPractice} description="Some nice game I developped in 5 mins so I can make some description?" />
            <MiniGame title={MiniGameTitles.Placeholder} description="Some nice game I developped in 5 mins so I can make some description?" />
            <MiniGame title={MiniGameTitles.Placeholder} description="Some nice game I developped in 5 mins so I can make some description?" />
        </>
    )
}

export enum MiniGameTitles {
    SameColorsWins = "same colors wins",
    MakeItPop = "make it pop",
    SomeMathPractice = "some math practice",
    Placeholder = "placeholder"
}