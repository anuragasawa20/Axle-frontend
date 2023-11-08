"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation,Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Button } from '../ui/button';
import "../styles/slider.scss"
import Link from 'next/link';

const StoreSlider = () => {

  const paginationStyle:any = {
    '--swiper-pagination-color': 'red',
  };


  return (
    <Swiper
    style={paginationStyle}
    spaceBetween={30}
    centeredSlides={true}
    mousewheel={false}
    
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: false,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation,Mousewheel]}

    >
     {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='main-slide'>
            <div><Image src={slide.poster} alt='slide' width={440} height={200}/></div>
            <div className='slidbtn'>
              <div>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div><Link href={`/games/battlefield2042`}><Button variant={'landing'}>Play Now</Button></Link></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StoreSlider;

const slideData = [
  {
    "_id": "64ccf2c1f1e1bab1af9eb46d",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153088/tpw9a6urvlwl73ojwd5e.webp",
    "title": "Death Stranding",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf321f1e1bab1af9eb473",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153184/emsabnuyzru6joyd3uei.webp",
    "title": "Terraria",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf348f1e1bab1af9eb475",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153223/qu6pri5cxxystbawl7bp.webp",
    "title": "No Man’s Sky",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf363f1e1bab1af9eb477",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153250/y7woky0tef7nexccjcov.webp",
    "title": "Dragon Age: Inquisition",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf389f1e1bab1af9eb479",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153288/mp6qtchkrdbihfyl9llp.webp",
    "title": "Minecraft",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf3acf1e1bab1af9eb47b",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153324/zdd2gznwv2cb8lovhks8.webp",
    "title": "Metal Gear Solid 5",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf3c7f1e1bab1af9eb47d",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153350/pth2eytsss13esa8ulgy.webp",
    "title": "Fallout 4",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf409f1e1bab1af9eb483",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153416/pb41nkyv9kpsvp0vefmh.webp",
    "title": "Far Cry 6",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf424f1e1bab1af9eb485",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153443/jnb2869euvtw8rfrxqpe.webp",
    "title": "Dying Light 2",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf441f1e1bab1af9eb487",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153472/yw5kpprqgebcaastuuwe.webp",
    "title": "Halo Infinite",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf46ef1e1bab1af9eb48d",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153517/wubifu9ol9qidq872rfh.webp",
    "title": "Days Gone",
    "description": "Death Stranding game added by sagar nirwal"
  },
  {
    "_id": "64ccf48ff1e1bab1af9eb48f",
    "poster": "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153551/br6lihzyfslfi6b2r1dh.webp",
    "title": "Forza Horizon 5",
    "description": "Death Stranding game added by sagar nirwal"
  }
]

