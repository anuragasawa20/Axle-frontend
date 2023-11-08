import "../../styles/store.scss"
import StoreSlider from "@/components/slider/StoreSlider"
import MostPopular from "./MostPopular"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react';
import Recommended from "./Recommended";
async function Store() {
  // const res = await fetch("http://localhost:5000/api/v1/games", {
  //   cache: 'no-cache'
  // })

  // const games: any = await res.json()
  // console.log(games)
  return (
    <div>
      <StoreSlider />
      <div className="my-5 mt-16 flex justify-between">
      <h3>Most Popular</h3>
      <Button variant={"link"}>See all <ChevronRight/></Button>
      </div>
      {/* <MostPopular/> */}
      <div className="my-5 mt-16 flex justify-between">
      <h3>Recommended</h3>
      <Button variant={"link"}>See all <ChevronRight/></Button>
      </div>
      {/* <Recommended/> */}

      
      {/* <div className='grid-cols-4 grid'>
        {games.games.map((item: any) => (
          <GameGrid key={item._id} title={item.title} category={item.category} imgURL={item.poster.url} id={item._id} />
        ))}
      </div> */}
    </div>
  )
}

export default Store