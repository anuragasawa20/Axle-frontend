"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/slider.scss";
import Image from "next/image";
import { useState } from "react";

const GamePageSlider = ({slideData}:any) => {
  const paginationStyle: any = {
    "--swiper-pagination-color": "var(--primary)",
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper]:any = useState(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);


  const handleThumbClick = (index:any) => {
    mainSwiper.slideTo(index);
    setActiveThumbIndex(index);
  };

  return (
    <div>
      <Swiper
        style={paginationStyle}
        spaceBetween={20}
        centeredSlides={true}
        mousewheel={true}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
        onSwiper={(swiper) => setMainSwiper(swiper)}
        onSlideChange={(swiper:any) => {setActiveThumbIndex(swiper)}}
      >
        {slideData?.map((slide:any, index:any) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt="slide"
              width={16}
              height={9}
              layout="responsive"
              style={{ borderRadius: "20px", userSelect: "none" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="m-10"
        onSwiper={(swiper:any) => setThumbsSwiper(swiper)}
        
      >
        {/* {slideData.map((slide, index) => (
          <SwiperSlide key={index} onClick={() => handleThumbClick(index)} className={index === activeThumbIndex ? "active-thumb" : "img-thumb"}>
            <Image
              src={slide.poster}
              alt="thumbnail"
              width={150}
              height={70}
              layout="fixed"
            />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default GamePageSlider;

// const slideData = [
//   {
//     _id: "1",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153088/tpw9a6urvlwl73ojwd5e.webp",
//     title: "Death Stranding",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "2",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153184/emsabnuyzru6joyd3uei.webp",
//     title: "Terraria",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "3",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153223/qu6pri5cxxystbawl7bp.webp",
//     title: "No Man’s Sky",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "4",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153250/y7woky0tef7nexccjcov.webp",
//     title: "Dragon Age: Inquisition",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "5",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153288/mp6qtchkrdbihfyl9llp.webp",
//     title: "Minecraft",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "6",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153324/zdd2gznwv2cb8lovhks8.webp",
//     title: "Metal Gear Solid 5",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "7",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153350/pth2eytsss13esa8ulgy.webp",
//     title: "Fallout 4",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "8",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153416/pb41nkyv9kpsvp0vefmh.webp",
//     title: "Far Cry 6",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "9",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153443/jnb2869euvtw8rfrxqpe.webp",
//     title: "Dying Light 2",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "10",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153472/yw5kpprqgebcaastuuwe.webp",
//     title: "Halo Infinite",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "11",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153517/wubifu9ol9qidq872rfh.webp",
//     title: "Days Gone",
//     description: "Death Stranding game added by sagar nirwal",
//   },
//   {
//     _id: "12",
//     poster:
//       "https://res.cloudinary.com/dc0u0chmp/image/upload/v1691153551/br6lihzyfslfi6b2r1dh.webp",
//     title: "Forza Horizon 5",
//     description: "Death Stranding game added by sagar nirwal",
//   },
// ];
