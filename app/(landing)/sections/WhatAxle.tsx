import "../styles/whataxle.scss"
import Image from "next/image";
import AxleDiagram from "../../assets/landing/AxleDiagram.png";

function WhatAxle() {
  return (
    <div className="what-axle-main">
      <div className="what-axle">
        <div>
          <h1 className="main-heading">
            WHAT IS <span>AXLE</span>
          </h1>
          <p className="big-text">
            Experience gaming's evolution with Axle! Decentralized, data-driven,
           
            and rewarding, it puts power in players' hands. Join a vibrant
  
            community, monetize your passion, and embrace the future of web3
 
            gaming
          </p>
        </div>
      </div>

      <div>
        <Image src={AxleDiagram} alt="AxleDiagram" />
      </div>
    </div>
  );
}

export default WhatAxle;
