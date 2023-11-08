import "../styles/hero.scss"
import Image from "next/image"
import LOGO from "../../assets/Logo.png"
import HeroIMG from "../../assets/landing/Characters.png"
import MainHeroIMG from "../../assets/landing/Maincharacter.png"
import NavBar from "../../../components/navbar/NavBar"

function Hero() {
  return (
    <div className="hero-main">
       <div className="fixed top-5 z-10">
       <NavBar/>
       </div>
        <div className="hero">
        <div>
          <h1 className="hero-heading">Welcome to <span><Image src={LOGO} alt="logo"/></span></h1>
            <p className="big-text">The ground breaking semi decentralized platform <br/> revolutionizing the gaming industry </p>
        </div>

    </div>

        <div className="hero-img">
            <Image src={HeroIMG} alt="hero-img"/>
            
        </div>
        <div className="hero-img" id="shack">
            <Image src={MainHeroIMG} alt="hero-img"/>
        </div>
    </div>
  )
}

export default Hero