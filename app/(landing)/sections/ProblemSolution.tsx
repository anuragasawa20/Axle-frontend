import "../styles/problume.scss"
import RedLines from "../../assets/landing/redlines.png";
// import RedlineEnd from "../../assets/landing/RedlineEnd.png";
import Image from "next/image";

function ProblemSolution() {
  return (
    <div className="problume-solution">
      <div className="problem">
        <Image src={RedLines} alt="redlines"/>
        <div>
          <h1 className="main-heading">PROBLEM IN THE GAMING INDUSTRY </h1>
          <p>
          Many gamers have felt undervalued in traditional gaming platforms, lacking meaningful incentives and rewards for their contributions.
          </p>
        </div>
      </div>

      <div className="solution">
      <Image src={RedLines} alt="redlines"/>
        <div>
          <h1 className="main-heading">SOLUTION WE BRING</h1>
          <p>
          Axle introduces a novel incentivization model, allowing users to exchange tokens and badges based on contributions and following. These tokens and badges offer opportunities for value creation. Gamers can also unlock exclusive NFTs and in-game items. Our platform adopts a unique structure to enhance engagement and rewards for the community.
          </p>
        </div>
      </div>
      {/* <Image src={RedlineEnd} alt="red-end"/> */}
    </div>
  );
}

export default ProblemSolution;
