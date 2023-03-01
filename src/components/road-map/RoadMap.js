import React from "react";
import RoadMapCard from "./RoadMapCard";

function RoadMap(props) {
  return (
    <section id="roadmap" className="block block--purple-to-yellow road-map">
      <div className="block__image">
        <div className="container">
          <header className="block__header">
            <h2 className="block__heading">ROADMAP</h2>
            <p className="block__description">
              We're in this for the long haul. We've set up some goalposts for
              ourselves. once we hit a trarget sell through precentage, we will
              gegin to work on realizing the stated goal.
            </p>
          </header>
          <section className="road-map__tree-container">
            <div className="road-map__root">
              <RoadMapCard
                precentage="10%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="right"
              />
              <RoadMapCard
                precentage="20%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="left"
              />
              <RoadMapCard
                precentage="40%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="right"
              />
              <RoadMapCard
                precentage="60%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="left"
              />

              <RoadMapCard
                precentage="80%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="right"
              />
              <RoadMapCard
                precentage="90%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="left"
              />

              <RoadMapCard
                precentage="100%"
                description="We relese the Caged Apes 5 Caged Apes(tokens held back from teh sale) are airdropped to random apeholders"
                handle="right"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;
