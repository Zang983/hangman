import { useNavigate } from "react-router-dom"
import { Menu } from "../components/menu/menu"
import { MenuInterractiveBtn } from "../components/MenuInterractiveBtn/MenuInterractiveBtn"
import { PlayBtn } from "../components/playBtn/playBtn"
import { MainTitle } from "../components/mainTitle/mainTitle"


function Index() {
  const navigate = useNavigate()

  return (

    <main className="flex justify-center items-center h-full w-full text-darkBlue">
      <Menu mainScreen>
        <MainTitle />
        <PlayBtn></PlayBtn>
        <MenuInterractiveBtn text={"HOW TO PLAY"} onClick={() => navigate("/rules")}></MenuInterractiveBtn>
      </Menu>

    </main>
  )
}

export default Index
