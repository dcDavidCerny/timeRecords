import MiniGame from "../components/MiniGame"

export const MiniGamesCollection = () => {
    return (
        <>
            <MiniGame title={MiniGameTitles.SameColorsWins} description="Some nice game I developped in 5 mins so I can make some description?" imgSrc="/sameColorsWins.png" />
            <MiniGame title={MiniGameTitles.MakeItPop} description="Some nice game I developped in 5 mins so I can make some description?" />
            <MiniGame title={MiniGameTitles.SomeMathPractice} description="Some nice game I developped in 5 mins so I can make some description?" />
            <MiniGame title={MiniGameTitles.PairsMemory} description="Some nice game I developped in 5 mins so I can make some description?" />
            <MiniGame title={MiniGameTitles.Placeholder} description="Some nice game I developped in 5 mins so I can make some description?" />
        </>
    )
}

export enum MiniGameTitles {
    SameColorsWins = "same colors wins",
    MakeItPop = "make it pop",
    SomeMathPractice = "some math practice",
    PairsMemory = "pairs memory",
    Placeholder = "placeholder"
}

export const gameImages = {
    [MiniGameTitles.SameColorsWins]: "/sameColorsWins.png",
    [MiniGameTitles.MakeItPop]: "/makeItPop.png",
    [MiniGameTitles.SomeMathPractice]: "/someMathPractice.png",
    [MiniGameTitles.PairsMemory]: "/pairsMemory.png",
    [MiniGameTitles.Placeholder]: "/placeholder.png"
}