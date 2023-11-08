import "../styles/navbar.scss"
import Image from "next/image"
import Logo from "../../app/assets/Logo.png"
import JoinWaitlist from "./JoinWaitlist"
import MobileNav from "./MobileNav";
import Link from "next/link";
import ClientOnly from "@/components/ClientOnly";
 
function NavBar() {

  return (

    <div className="navbar">
      <Link href={'/'}>
      <Image src={Logo} alt="logo"/>
      </Link>
      <nav>
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#roadmap">Road Map</Link>
      </nav>
      <div>
        <div>
        <ClientOnly>
        <JoinWaitlist />
        </ClientOnly>
        </div>
        <span>
        <MobileNav/>
      </span>
      </div>

    </div>
  )
}

export default NavBar