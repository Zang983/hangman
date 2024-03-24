import { useContext } from "react"
import { GameContext } from "../../context/gameContext"

export const Alphabet = ({submitInput}:{submitInput:(letter:string)=>void}) => {
    const context = useContext(GameContext)
    const createAlphabet = () => {
        const alphabet = []
        for (let i = 0; i < 26; i++)
            alphabet.push(String.fromCharCode(i + 65))
        return alphabet
    }


    const usedLetter = context.inputs
    return (
        <div className="flex flex-wrap
        gap-2
        tablet:gap-4
        desktop:gap-6
        ">
            {
                createAlphabet().map((letter) => <button
                    className={`flex items-center justify-center bg-white text-darkBlue
                    ${(usedLetter.indexOf(letter) !== -1) && 'opacity-25'}
                    w-[29px] h-[56px] text-sm rounded-lg
                    tablet:w-[64px] tablet:h-[84px] tablet:text-xl tablet:rounded-3xl 
                    desktop:w-[109px] `}
                    key={letter}
                    onClick={() => submitInput(letter)}
                    disabled={(usedLetter.indexOf(letter.toUpperCase()) !== -1 || context.life >= 8)}
                >
                    {letter}
                </button>)
            }

        </div>
    )
}