import { Link } from "react-router-dom"

function Index() {
  return (

    <main className="flex justify-center items-center h-full w-full text-darkBlue">
      <Link to="rules" className=" h-40 w-72 bg-white">REGLES</Link>
      <Link to="config" className=" h-40 w-72 bg-white">JOUER</Link>

    </main>
  )
}

export default Index
