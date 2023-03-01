import React from "react";
import Hero from "./Hero";
import OurTeam from "./our-team/OurTeam";
import RoadMap from "./road-map/RoadMap";
import ShowCase from "./show-case/ShowCase";

function Home(props) {
  return (
    <>
      <Hero />
      <ShowCase />
      <RoadMap />
      <OurTeam />
    </>
  );
}

export default Home;
