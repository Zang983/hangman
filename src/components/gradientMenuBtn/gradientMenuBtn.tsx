import { useContext } from "react"
import { GameContext } from "../../context/gameContext"

export const GradientMenuButton = () => {
    const context = useContext(GameContext)
    const handleClick = () => {
            context.setGameStatus("PAUSED")
    }
    return (
        <button onClick={handleClick} className=" hover:brightness-125 shadow-returnBtn bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[40px] h-[40px] aspect-square left-0 rounded-full flex items-center justify-center 
        tablet:shadow-returnBtnTablet tablet:w-[64px] tablet:h-[64px]
        desktop:w-[94px] desktop:h-[94px] ">
            <svg
                className="
                w-[16.17px] h-[13.62px]
                tablet:w-[25.87px] tablet:h-[21.79px]
                desktop:w-[38px] desktop:h-8
                "
                width="38" height="32"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 32"><path fill="#fff" d="M0 0h38v7H0zM0 13h38v6H0zM0 25h38v7H0z" />
            </svg>
        </button>
    )
}