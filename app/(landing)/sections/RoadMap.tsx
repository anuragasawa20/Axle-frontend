import "../styles/roadmap.scss"
import Image from 'next/image'
import RoadMapIMG from '../../assets/landing/RoadMap.png'
import RedlineEnd from "../../assets/landing/RedlineEnd.png";

function RoadMap() {
    return (
        <div className='road-map'>

            <h1 className='main-heading'>Road Map</h1>
            <div>
                <Image src={RoadMapIMG} alt='road-map' />
            </div>
            <div>
                <Image src={RedlineEnd} alt='red-line' />
            </div>
        </div>
    )
}

export default RoadMap