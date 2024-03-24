import { LinearTitle } from "../linearTitle/linearTitle"

export const MainTitle = () => {
    return <h1 className="absolute z-20 -translate-y-1/2">
        <span className="text-base text-white linearTitle linearMainTitle absolute left-[16%] top-[-4%] 
        tablet:text-xl
        "
        data-content="THE"
        >THE</span>
        <LinearTitle Container={"span"} mainTitle>Hangman</LinearTitle>
        <span className="text-base text-white linearTitle linearMainTitle absolute left-[58%] top-[80%] 
        tablet:text-xl
        "
        data-content="GAME"
        >GAME</span>

    </h1>
}