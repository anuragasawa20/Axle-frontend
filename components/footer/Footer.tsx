import "../styles/footer.scss"
import Image from "next/image"
import FooterIMG from "../../app/assets/landing/Footer.png"
import FooterBox from "./FooterBox"

function Footer() {

  return (
    <div className="footer">
      <Image src={FooterIMG} alt="footer" />
      <FooterBox />
    </div>
  )
}

export default Footer