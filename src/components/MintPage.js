import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAccount, loadWorkingNetwork } from "../store/contract";
import Mint from "./Mint";

function MintPage(props) {
  const dispatch = useDispatch();

  const loadBlockchainData = async () => {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    loadWorkingNetwork(dispatch);
    loadAccount(dispatch, accounts[0]);

    // Reload page when netwoirk changes
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    // Fetch current account when network change
    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
            method: "eth_accounts",
          })
        
      loadAccount(dispatch,accounts[0]);
    });
  };
  useEffect(() => {
    loadBlockchainData();
  });

  return <Mint />;
}

export default MintPage;

// refector
// 1. first account laod
// 2. then provider load with singer
// 3. then contract ditalils load and store all contract detals ass single object
// 4. contune implienting mint function
// 5. costamize infromation box info
// 6. add loding indicator to the mint button
