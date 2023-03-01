import React from "react";
import { useSelector } from "react-redux";
import truncateEthAddress from "truncate-eth-address";
import { getAccout,getIsPaused,getIsPresaleActivated,getisPublicsaleActivated } from "../../store/contract";

function MintHeader(props) {
  const account = useSelector(getAccout);
  const isPaused = useSelector(getIsPaused)
  const isPresaleActivated = useSelector(getIsPresaleActivated)
  const isPublicsaleActivated = useSelector(getisPublicsaleActivated)
  return (
    <header className="mint-model__header">
      <h1 className="mint-model__heading">{isPaused?"Sale Paused":isPresaleActivated?"Pre sale":isPublicsaleActivated?"Public sale":"Sale Paused" }</h1>
      <p className="mint-model__address">
        {account ? truncateEthAddress(account) : "Account not available"}
      </p>
    </header>
  );
}

export default MintHeader;





