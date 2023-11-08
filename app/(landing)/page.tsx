import EmpGamers from "./sections/EmpGamers";
import FixedLayout from "./sections/FixedLayout";
import Hero from "./sections/Hero";
import ProblemSolution from "./sections/ProblemSolution";
import RoadMap from "./sections/RoadMap";
import WhatAxle from "./sections/WhatAxle";
import AxleFeatures from "./sections/axlefeatures/AxleFeatures";
import Footer from "../../components/footer/Footer";


export default function Home() {
  return (
    <div>
      <div id="home">
      <Hero/>
      <EmpGamers/>
      </div>
      <div id="about">
        <WhatAxle/>
      </div>
      <div id="features">
        <AxleFeatures/>
        <ProblemSolution/>
      </div>
      <div id="roadmap">
        <RoadMap/>
      </div>
      <Footer/>
      <FixedLayout/>
    </div>
  )
}
