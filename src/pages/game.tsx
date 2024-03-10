import { useState } from "react"
import { LifeBar } from "../components/lifebar/lifebar"
import { MenuButton } from "../components/menuBtn/menuBtn"

function Game() {
    /*
    Le contexte devra contenir la liste de données
    La liste des catégories trouvées (avec un useMemo pour ne pas avoir à la recalculée)
    Lorsqu'une catégorie est séléctionnée : 
        Le mot en cours pioché parmis les mots non trouvés
        La catégorie en cours  
    */
   const [life,setLife] = useState(8)
    return (
        <>
        <header className="flex relative
        
        desktop:pt-[60px]
        ">
            <div className="relative flex">
                <MenuButton />
                Catégorie
            </div>
            <LifeBar />
        </header>

            <main className="bg-green-500 h-full w-full">
            </main>
        </>
    )
}
export default Game
