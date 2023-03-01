import { createSlice } from "@reduxjs/toolkit";
import { networkMapping } from "../constants";
import { createSelector } from "reselect";
import { accountLoadBegan, dataLoadBegan, providerLoadBegan } from "./actions";
import { ethers } from "ethers";

const slice = createSlice({
  name: "contract",
  initialState: {
    workingNetworks: [],
    accountData: {
      account: "",
      isValidMerkleProof: false,
      hexProof: "",
    },
    providerData: {
      provider: "",
      chainId: "",
      magicCityApe: "",
    },
    contractData: {
      maxSupply: 100,
      totalSupply: 60,
      presaleAmountLimit: 3,
      isPresaleActivated: false,
      isPublicsaleActivated: true,
      publicsaleAmountLimit: 2,
      isPaused: false,
    },
    isDataLoading: false,
  },

  reducers: {
    dataRequested: (state, action) => {
      state.isDataLoading = true;
    },

    dataReceived: (state, action) => {
      state.isDataLoading = false;
    },

    accountDataReceived: (state, action) => {
      state.accountData.account = action.payload.account;
      state.accountData.isValidMerkleProof = action.payload.isValidMerkleProof;
      state.accountData.hexProof = action.payload.hexProof;
    },
    providerDataReceived: (state, action) => {
      state.providerData.provider = action.payload.provider;
      state.providerData.chainId = action.payload.chainId;
      state.providerData.magicCityApe = action.payload.magicCityApe;
    },
    contractDataReceived: (state, action) => {
      state.contractData.maxSupply = action.payload.maxSupply;
      state.contractData.totalSupply = action.payload.totalSupply;
      state.contractData.isPresaleActivated = action.payload.isPresaleActivated;
      state.contractData.isPublicsaleActivated =
        action.payload.isPublicsaleActivated;
      state.contractData.presaleAmountLimit = action.payload.presaleAmountLimit;
      state.contractData.isPaused = action.payload.isPaused;
    },

    workingNetworksReceived: (state, action) => {
      state.workingNetworks = action.payload;
    },
  },
});

export const {
  dataRequested,
  dataReceived,
  accountDataReceived,
  workingNetworksReceived,
  providerDataReceived,
  contractDataReceived,
} = slice.actions;

export default slice.reducer;

// load Account
export const loadAccount = (dispatch,acc) => {
  dispatch(
    accountLoadBegan({
      acc,
      onStart: dataRequested,
      onSuccess: accountDataReceived,
      onEnd: dataReceived,
      next1: providerDataReceived,
      next2:contractDataReceived
    })
  );
};

// porvider load
export const loadProvider = (dispatch) => {
  dispatch(
    providerLoadBegan({
      onStart: dataRequested,
      onSuccess: providerDataReceived,
      onEnd: dataReceived,
    })
  );
};

// load ContractData
export const loadContractData = (dispatch) => {
  dispatch(
    dataLoadBegan({
      onStart: dataRequested,
      onSuccess: contractDataReceived,
      onEnd: dataReceived,
    })
  );
};

// load working Network
export const loadWorkingNetwork = (dispatch) => {
  const workingNetworks = Object.keys(networkMapping).map((x) => +x);

  dispatch(workingNetworksReceived(workingNetworks));

  return workingNetworks;
};

export const presaleMint = async (
  account,
  amount,
  proof,
  magicCityApe,
  dispatch
) => {
  try {
    console.log(account, amount, proof);
    const mintResponse = await magicCityApe.presaleMint(
      account,
      amount,
      proof,
      { value: ethers.utils.parseEther("0.1").mul(amount) }
    );
    const mintRisipt = await mintResponse.wait(1);
    dispatch({ type: "contract/transectionSuccess" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "contract/transectionfail", payload: error.message });
  }
};

export const publicSaleMint = async (amount, magicCityApe,dispatch) => {
  try {
    const mintResponse = await magicCityApe.publicSaleMint(amount,{value:ethers.utils.parseEther("0.1").mul(amount)});
    const mintRisipt = await mintResponse.wait(1);
    dispatch({ type: "contract/transectionSuccess" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "contract/transectionfail", payload: error.message });
  }
};

//publicSaleMint

//selectors

export const getAccout = createSelector(
  (state) => state.contract.accountData,
  (accountData) => accountData.account
);

export const getChainId = createSelector(
  (state) => state.contract.providerData,
  (providerData) => providerData.chainId
);

export const getWorkingNetwork = createSelector(
  (state) => state.contract.workingNetworks,
  (workingNetworks) => workingNetworks
);

export const getProvider = createSelector(
  (state) => state.contract.providerData,
  (providerData) => providerData.provider
);

export const getMagicCityApe = createSelector(
  (state) => state.contract.providerData,
  (providerData) => providerData.magicCityApe
);

export const getMaxSupply = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.maxSupply
);

export const getTotalSupply = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.totalSupply
);

export const getPresaleAmountLimit = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.presaleAmountLimit
);

export const getIsPresaleActivated = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.isPresaleActivated
);

export const getisPublicsaleActivated = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.isPublicsaleActivated
);

export const getPublicsaleAmountLimit = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.publicsaleAmountLimit
);

export const getIsPaused = createSelector(
  (state) => state.contract.contractData,
  (contractData) => contractData.isPaused
);

export const getIsDataLoading = createSelector(
  (state) => state.contract.isDataLoading,
  (isDataLoading) => isDataLoading
);

export const getIsValidMerkleProof = createSelector(
  (state) => state.contract.accountData,
  (accountData) => accountData.isValidMerkleProof
);

export const getMerkleProof = createSelector(
  (state) => state.contract.accountData,
  (accountData) => accountData.hexProof
);
