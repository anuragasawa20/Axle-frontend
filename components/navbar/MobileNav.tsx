"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import JoinWaitlist from "./JoinWaitlist";
import ClientOnly from "@/components/ClientOnly";
function MobileNav() {
  const [mobnav, setMobNav] = useState(false);

  const handleMobNavClick = () => {
    setMobNav(!mobnav);
  };
  return (
    <div>
        {/* <div>      <GiHamburgerMenu
        style={{ fontSize: "2rem" }}
        onClick={handleMobNavClick}
      /></div> */}

      <div>
      {mobnav ? (
        <div className="mobile-nav">
          <span>
            <IoMdClose onClick={handleMobNavClick} />
          </span>

          <div className="nav-mob">
            <a href="#home" onClick={handleMobNavClick}>
              Home
            </a>
            <a href="#about" onClick={handleMobNavClick}>
              About
            </a>
            <a href="#features" onClick={handleMobNavClick}>
              Features
            </a>
            <a href="#roadmap" onClick={handleMobNavClick}>
              Road Map
            </a>
            <ClientOnly>
              <JoinWaitlist />
            </ClientOnly>
          </div>
        </div>
      ) : null}
      </div>
    </div>
  );
}

export default MobileNav;
