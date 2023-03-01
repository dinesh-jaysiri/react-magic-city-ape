import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <section className="block block--pink-to-yellow hero">
      <div className="block__image">
        <div className="container">
          <header className="block__header hero__header">
            <h2 className="hero__grating">welcome to the</h2>
            <h1 className="hero__heading">
              MAGIC CITY <br className="hero__line-brake" />
              APES
            </h1>
            <p className="hero__description">
              Magic City Apes (MCA) to mint NFTs and get access to members
              content and by merchandise & learn about events
            </p>
            <Link to="/mint">
              <button className="btn btn--dark">mint your nft</button>
            </Link>
          </header>
        </div>
      </div>
    </section>
  );
}

export default Hero;
