"use client"

import "../../styles/store.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import GameGrid from '@/components/GameGrid'

async function MostPopular() {
    const breakpoints = {
        320: { slidesPerView: 1 }, 
        1024: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
        1500: { slidesPerView: 4 }
      };

  const res = await fetch("http://localhost:5000/api/v1/games?keyword=&category=&page=2&limit=6", {
  })

  const games: any = await res.json()
  return (
    <Swiper
    spaceBetween={16}
    breakpoints={breakpoints}
    mousewheel={true}
    modules={[Mousewheel]}
  >
 
        {games.games.map((item: any) => (
            <SwiperSlide key={item._id}>
          <GameGrid key={item._id} title={item.title} category={item.category} imgURL={item.poster.url} id={item._id} />
          </SwiperSlide>
        ))}
  
      </Swiper>
  )
}

export default MostPopular