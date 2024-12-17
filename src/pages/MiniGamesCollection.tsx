import MiniGame from "../components/MiniGame"

export const MiniGamesCollection = () => {
    return (
        <>
            <MiniGame title={MiniGameTitles.SameColorsWins} description="When all squares have a same color, you win!" imgSrc="/timeRecords/sameColorsWins.png" />
            <MiniGame title={MiniGameTitles.MakeItPop} description="When the circle reaches max size, you win!" imgSrc="/timeRecords/makeItPop.png" />
            <MiniGame title={MiniGameTitles.SomeMathPractice} description="When you click on a correct square, you win!" imgSrc="/timeRecords/someMathPractice.png" />
            <MiniGame title={MiniGameTitles.PairsMemory} description="Remember the pairs, click on correct square, you win!" imgSrc="/timeRecords/pairsMemory.png" />
            <MiniGame title={MiniGameTitles.SelectToAddsUpTo} description="Select squares to adds up to the total number, you win!" imgSrc="/timeRecords/selectToAddsUpTo.png" />
        </>
    )
}

export enum MiniGameTitles {
    SameColorsWins = "same colors wins",
    MakeItPop = "make it pop",
    SomeMathPractice = "some math practice",
    PairsMemory = "pairs memory",
    SelectToAddsUpTo = "select to adds up to",
}

export const gameImages = {
    [MiniGameTitles.SameColorsWins]: "/sameColorsWins.png",
    [MiniGameTitles.MakeItPop]: "/makeItPop.png",
    [MiniGameTitles.SomeMathPractice]: "/someMathPractice.png",
    [MiniGameTitles.PairsMemory]: "/pairsMemory.png",
    [MiniGameTitles.SelectToAddsUpTo]: "/selectToAddsUpTo.png",
}