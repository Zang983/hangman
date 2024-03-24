import { useEffect, useContext } from "react"
import { LifeBar } from "../components/lifebar/lifebar"
import { WordToFind } from "../components/wordToFind/wordToFind"
import { Alphabet } from "../components/alphabet/alphabet"
import { Modale } from "../components/modale/modale"
import { GradientMenuButton } from "../components/gradientMenuBtn/gradientMenuBtn"
import { GameContext } from "../context/gameContext"
import { useNavigate } from "react-router-dom"


function Game() {

    const context = useContext(GameContext)
    const navigate = useNavigate()
    const status = context.gameStatus

    const handleKeyboard = (e:KeyboardEvent) => {
        if (status === "PAUSED" || status === "PENDING") {
            if (e.key === "Escape") {
                e.preventDefault()
                context.setGameStatus(status === "PENDING" ? "PAUSED" : "PENDING")
            }
        }
        const char = e.key.toUpperCase()
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= (65 + 26) && char.length===1){
            console.log(char)
            submitInput(char)
            console.log(e)

        }
    }

    const submitInput = (letter:string) => {
        if (context.life < 8)
            context.setInputUser(letter)
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        return () => document.removeEventListener("keydown", handleKeyboard)
    }, [context.gameStatus])

    useEffect(() => {
        context.category === "" && navigate("/config")
    }, [])

    return (
        <>
            <header className="flex relative justify-between
            pt-[46px] mb-[78px]
        tablet:pt-[60px] tablet:mb-[111px]
        desktop:mb-[88px]
        ">
                <div className="relative flex items-center">
                    <GradientMenuButton />
                    <h1 className="leading-120 capitalize text-white ml-4
                tablet:text-xl tablet:uppercase tablet:ml-8
                desktop:text-2xl desktop:capitalize desktop:ml-[57px]
                ">
                        {context.category.toLowerCase()}
                    </h1>
                </div>
                <div className="flex items-center gap-4
                tablet:gap-10
                ">
                    <LifeBar life={context.life} />
                    <svg
                        className="
                    w-[26px] h-6
                    tablet:w-[54px] tablet:h-[50px]
                    "
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 50">
                        <path fill="url(#a)" d="m26.667 49.467-3.867-3.52C9.067 33.493 0 25.253 0 15.2 0 6.96 6.453.533 14.667.533c4.64 0 9.093 2.16 12 5.547 2.906-3.387 7.36-5.547 12-5.547C46.88.533 53.333 6.96 53.333 15.2c0 10.053-9.066 18.293-22.8 30.747l-3.866 3.52Z" /><defs><linearGradient id="a" x1="26.667" x2="26.667" y1="8.567" y2="49.467" gradientUnits="userSpaceOnUse"><stop stopColor="#FE71FE" /><stop offset="1" stopColor="#7199FF" /></linearGradient></defs>
                    </svg>
                </div>
            </header>

            <main>
                <WordToFind />
                <Alphabet submitInput={submitInput} />
            </main>
            <Modale />
        </>
    )
}
export default Game
