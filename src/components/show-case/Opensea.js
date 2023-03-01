import React from "react";
import opensea from "../../images/opensea-logo.png";

function Opensea(props) {
  return (
    <section className="block--pink opensea-banner">
      <div className="opensea-banner__image">
        <div className="opensea-banner__container">
          <header className="opensea-banner__header">
            <h2 className="opensea-banner__heading">buy mca at opensea</h2>
            <p className="opensea-banner__description">
              The initial sale has sold out. To get your Bored Ape, check out
              the collection on OpenSea.
            </p>
            <img
              className="opensea-banner__logo"
              src={opensea}
              alt="Opensea logo"
            />
          </header>
        </div>
      </div>
    </section>
  );
}

export default Opensea;
