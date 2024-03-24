import { useContext, useEffect,useRef } from "react"
import { MenuInterractiveBtn } from "../MenuInterractiveBtn/MenuInterractiveBtn"
import { LinearTitle } from "../linearTitle/linearTitle"
import { useNavigate } from "react-router-dom"
import { Menu } from "../menu/menu"
import { GameContext } from "../../context/gameContext"

export const Modale = () => {
    const modaleRef = useRef<HTMLDialogElement>(null)


    const context = useContext(GameContext)
    const navigate = useNavigate()
    const status=context.gameStatus

    useEffect(()=>{
        if(status!=="PENDING")
            modaleRef.current!.showModal()
        else
            modaleRef.current!.close()
    },[status])

    useEffect(()=>{
        modaleRef.current!.addEventListener('cancel',(e)=>{e.preventDefault()})
    })

    return <dialog ref={modaleRef} className="open:max-w-full open:w-full open:max-h-full open:h-full open:flex items-center justify-center modaleBgGradient m-0" >
        <Menu>
            <div className="-translate-y-1/2 mb-[48px]">
                <LinearTitle modale>{
                    status.toUpperCase() === "PAUSED" ? "Paused" : status === "LOSE" ? "You Lose" : "You Win"
                }
                </LinearTitle>
            </div>
            <div className="flex -translate-y-1/2 flex-col gap-[34px] items-center">
                {status.toUpperCase() === "PAUSED" ?
                    <MenuInterractiveBtn text="continue" onClick={() => context.setGameStatus("PENDING")} /> :
                    <MenuInterractiveBtn text="play again !" onClick={() => {
                        context.newGame()
                    }} />
                }
                <MenuInterractiveBtn text="new category" onClick={() => navigate("/config")} />
                <MenuInterractiveBtn gradient text="quit game" onClick={() => navigate("/")} />
            </div>
        </Menu>
    </dialog>
}