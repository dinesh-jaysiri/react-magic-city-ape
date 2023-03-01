import React from 'react';
import { useSelector } from 'react-redux';
import ape from "../../images/apes/10.png"
import { getMaxSupply, getTotalSupply } from '../../store/contract';

function MintImg(props) {
  const totalSupply = useSelector(getTotalSupply)
  const maxSupply  = useSelector(getMaxSupply)
    return (
      <div className="mint-model__image-container">
        <img
          className="mint-model__image"
          src={ape}
          alt="minting ape image"
        />

        <div className="badge">{`${totalSupply}/${maxSupply}`}</div>
      </div>
    );
}

export default MintImg;