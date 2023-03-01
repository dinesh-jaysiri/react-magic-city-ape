import React from 'react';
import ape from "../../images/apes/4.png"

function GenarateNft(props) {
    return (
        <section className="grid grid--1x2 genarate-nft">
            <div className="genarate-nft__setting">
                <header className="genarate-nft__header">
                    <h3 className="genarate-nft__heading">CREATE YOUR OWN UNIQUE MCA NFT's</h3>
                    <p className="genarate-nft__description">
                        Each MCA is unique and programmatically genarated from over 170 possible
                        traits, including expression, headware, clothing, and more. All apes are
                        dope, but some are rarer than others.
                    </p>
                </header>
                <div className="genarate-nft__btn-container grid grid--2x3">
                    <button className="btn btn--outline">espression</button>
                    <button className="btn btn--outline">headwear</button>
                    <button className="btn btn--outline">clothing</button>
                    <button className="btn btn--outline">background</button>
                    <button className="btn btn--outline">mouth</button>
                </div>
            </div>
            <img className="genarate-nft__image" src={ape} alt="board ape" />
        </section>
    );
}

export default GenarateNft;