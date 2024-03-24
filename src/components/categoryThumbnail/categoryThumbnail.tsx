import { useContext } from "react"
import { Link } from "react-router-dom"
import { GameContext } from "../../context/gameContext"

export const CategoryThumbnail = ({ name }: { name: string }) => {
    const context=useContext(GameContext)
    return (<Link to={`/game?category=${name}`}
    onClick={()=>{
        context.newGame()
        context.setCategory(name.toUpperCase())
        context.changeWordToFind()
    }}
    className="shadow-generalShadow bg-blue flex items-center justify-center text-white uppercase hover:brightness-125
    w-full h-[77px] rounded-[20px] text-sm
    tablet:text-xl tablet:min-w-[324px] tablet:min-h-[182px] tablet:max-w-[324px] tablet:max-h-[182px] tablet:rounded-[40px]
    desktop:min-w-[384px] desktop:min-h-[190px] desktop:max-w-[384px] desktop:max-h-[190px]
    ">
       {name}
    </Link>)
}