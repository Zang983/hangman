import { useContext } from "react"
import { GameContext } from "../../context/gameContext"

interface Letter {
    letter: string,
    finded: boolean
}

const DisplayedLetter = ({ letter }: { letter: Letter }) => {
    return <div className={`flex  items-center justify-center text-white  bg-blue shadow-generalShadow uppercase
    ${(letter.finded === false && letter.letter !== " ") && 'opacity-25'} 
    ${letter.letter === " " && 'opacity-0'}
    text-[40px] w-[40px] h-[66px] rounded-xl
    tablet:text-[64px] tablet:w-[88px] tablet:h-[112px] tablet:rounded-[32px]
    desktop:w-[112px] desktop:h-[128px] desktop:rounded-[40px] desktop:text-2xl`}>
        {letter.finded === true && letter.letter}
    </div>
}

export const WordToFind = () => {
    const context = useContext(GameContext)

    return <div className="flex flex-wrap justify-center 
    mb-[118px] gap-2
    tablet:mb-[134px] talet:gap-3
    desktop:mb-[120px] desktop:gap-4">

        {
            context.wordToFind.map((letter:Letter, index: number) => {
                return <DisplayedLetter letter={letter} key={index} />
            })
        }

    </div>
}