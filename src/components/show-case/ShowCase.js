import React from "react";
import GenarateNft from "./GenarateNft";
import Opensea from "./Opensea";
import Privilage from "./Privilage";
import Slider from "./Slider";

function ShowCase(props) {
  return (
    <section className="block block--white-to-pink show-case">
      <div className="block__image">
        <div className="container">
          <header className="block__header">
            <h2 className="block__heading">10,000+ MGIC CITY APE NFTS</h2>
            <p className="block__description">
              unique digital collectibles living on the Ethereum blockchain.
              Your Bored Ape doubles as your Yacht Club menbership card, and
              grants access to members-only benefits, the first of which is
              access to THE BATHROOM, a collabrative graffiti board. Future
              areas and peaks can be unlocked by the community though roadmap
              activation
            </p>
          </header>

          <Slider />
          <Opensea />
          <GenarateNft />
          <Privilage />
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
