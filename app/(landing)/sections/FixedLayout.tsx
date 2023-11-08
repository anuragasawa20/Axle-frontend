import Image from "next/image"
import Hexacon from "../../assets/landing/Hexacon.png"
import "../styles/fixedlayout.scss"

function FixedLayout() {
  return (
    <div>
        <div className="fixed-light"></div>
        <div className="fixed-light2"></div>
        <div className="fixed-img"><Image src={Hexacon} alt="img"/></div>
    </div>
  )
}

export default FixedLayout