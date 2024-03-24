import { CategoryThumbnail } from "../components/categoryThumbnail/categoryThumbnail"
import { LinearTitle } from "../components/linearTitle/linearTitle"
import { ReturnButton } from "../components/returnBtn/returnBtn"

function Config() {
  const category = ["movies", "TV SHOWS", "COUNTRIES", "CAPITAL CITIES", "ANIMALS", "SPORTS"]
  return (

    <>
      <header className="flex relative
            pt-8 pb-[79px] justify-between items-center
            tablet:items-center tablet:justify-center tablet:pb-0
            desktop:pt-20 dekstop:pb-16  ">
        {/* <Link to="/" className="">Accueil</Link> */}
        <ReturnButton />
        <LinearTitle >Pick a Category</LinearTitle>
      </header>
      <main className="flex flex-wrap
      gap-4
      tablet:gap-8
      desktop:mt-[155px]   desktop:gap-y-[50px]
      ">
        {
          category.map((item,index)=><CategoryThumbnail key={index} name={item} />)
        }
      </main>
    </>
  )
}

export default Config
