import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccout,
  getIsPaused,
  getIsPresaleActivated,
  getisPublicsaleActivated,
  getIsValidMerkleProof,
  getMagicCityApe,
  getMerkleProof,
  getPresaleAmountLimit,
  getPublicsaleAmountLimit,
  presaleMint,
  publicSaleMint,
} from "../store/contract";
import ConnectBtn from "./mint/ConnectBtn";
import MintHeader from "./mint/MintHeader";
import MintImg from "./mint/MintImg";

function Mint(props) {
  const [mintAmount, setMintAmount] = useState(1);
  const account = useSelector(getAccout);
  const proof = useSelector(getMerkleProof);
  const presaleAmountLimit = useSelector(getPresaleAmountLimit);
  const isPresaleActivated = useSelector(getIsPresaleActivated);
  const publicsaleAmountLimit = useSelector(getPublicsaleAmountLimit);
  const isPublicsaleActivated = useSelector(getisPublicsaleActivated);
  const isValidMerkleProof = useSelector(getIsValidMerkleProof);
  const magicCityApe = useSelector(getMagicCityApe);
  const isPaused = useSelector(getIsPaused);
  const dispatch = useDispatch();

  const handleMintNFT = async () => {
    if (isPaused) return
    if (isPresaleActivated && isValidMerkleProof) return await presaleMint(account, mintAmount, proof,magicCityApe,dispatch)
    if (isPublicsaleActivated) return await publicSaleMint(mintAmount,magicCityApe,dispatch)
    return
  };

  const handleIncrement = () => {
    if (isPresaleActivated) {
      mintAmount < presaleAmountLimit
        ? setMintAmount(mintAmount + 1)
        : setMintAmount(presaleAmountLimit);
    }
    if (!isPresaleActivated) {
      mintAmount < publicsaleAmountLimit
        ? setMintAmount(mintAmount + 1)
        : setMintAmount(publicsaleAmountLimit);
    }
  };

  const handleDecrement = () => {
    mintAmount > 2 ? setMintAmount(mintAmount - 1) : setMintAmount(1);
  };
  return (
    <section className="block block--pink-to-yellow mint">
      <div className="block__image">
        <div className="container">
          <div className="mint-model">
            <MintHeader />

            <div className="grid grid--1x2">
              <MintImg />
              <div className="mint-model__setting">
                <div className="button-continer">
                  <button
                    onClick={handleDecrement}
                    className="btn btn--round btn--light btn--compact"
                  >
                    -
                  </button>
                  <p className="mint-amount">{mintAmount}</p>
                  <button
                    onClick={handleIncrement}
                    className="btn btn--round btn--light btn--compact"
                  >
                    +
                  </button>
                </div>
                <div className="mint-amount__notice">
                  Max Mint Amount :{" "}
                  {isPresaleActivated
                    ? presaleAmountLimit
                    : publicsaleAmountLimit}
                </div>
                <div className="total-price">
                  <span className="total-price__total">Total</span>
                  <span>
                    <span className="toatal-price__gas">
                      {0.01 * mintAmount} ETH
                    </span>
                    <span> + GAS</span>
                  </span>
                </div>
                <ConnectBtn handleMintNFT={() => handleMintNFT()} />
              </div>
            </div>
            <div className="mint-model__info-box">
              Invalid Merkle Proof-You are not on the whitelist
            </div>
            <div className="mint-model__contract-address">
              <h2>Contract Address</h2>
              <p>0x124....15636</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mint;
