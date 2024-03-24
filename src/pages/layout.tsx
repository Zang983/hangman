import { ReactElement } from "react"
import { useLocation,  } from "react-router-dom"
import { GameProvider } from "../context/gameContext"

function Layout({ children }: { children: ReactElement }) {
    const location = useLocation()
    return (
        <div className={`w-full h-full ${location.pathname!== "/"?"linearBg":""}  tracking-widest
        pl-[25px] pr-[26px]
        tablet:pl-[40px] tablet:pr-[48px] 
        desktop:px-[112px] 
        `}>
            <GameProvider>
            {children}
            </GameProvider>
        </div>
    )
}

export default Layout