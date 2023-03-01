import { ThreeDots } from "react-loader-spinner";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccout,
  getChainId,
  getIsDataLoading,
  getProvider,
  getWorkingNetwork,
  loadAccount,
} from "../../store/contract";

function ConnectBtn({ handleMintNFT }) {
  const dispatch = useDispatch();
  const account = useSelector(getAccout);
  const provider = useSelector(getProvider);
  const chainId = useSelector(getChainId);
  const workingNetworks = useSelector(getWorkingNetwork);
  const isDataLoading = useSelector(getIsDataLoading);

  const handleConnectWallet = async () => {
    loadAccount(dispatch);
  };

  const handleSwitchWallet = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      disabled={!provider||isDataLoading}
      onClick={() => {
        account && workingNetworks.includes(chainId)
          ? handleMintNFT()
          : account && !workingNetworks.includes(chainId)
          ? handleSwitchWallet()
          : handleConnectWallet();
      }}
      className="btn btn--block btn--light-blue btn--round mint__btn"
    >
      {isDataLoading ? (
        <ThreeDots
          height="27.59"
          width="50"
          radius="1"
          color="#070717"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : account && workingNetworks.includes(chainId) ? (
        "mint"
      ) : account && !workingNetworks.includes(chainId) ? (
        "Switch Network"
      ) : (
        "Connect Wallet"
      )}
    </button>
  );
}

export default ConnectBtn;
