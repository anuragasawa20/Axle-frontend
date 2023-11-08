import { Tag } from 'lucide-react'
import './styles/game-grid.scss'
import Link from "next/link"
import Image from 'next/image'

const GameGrid = ({
    title,category,imgURL,id
  }: {
    title:string,
    category?:string,
    imgURL:any,
    id:any,
  }) => {
  return (
    <div>
          <Link href={`/games/${id}`}>
    <div className="grid-main">
        <div className="img-grid">
            <img src={imgURL} alt="game-img" width={440} height={200}/>
        </div>
        <div className='grid-title'>
            <h4>{title}</h4>
            {category?(<div className='category-tag'><Tag size={"18px"}/><p>{category}</p></div>):("")}
        </div>
    </div>
    </Link>
    </div>
  )
}

export default GameGrid