import { ethers } from "ethers";
import {
  accountLoadBegan,
  accountLoadSuccess,
  accountLoadFailed,
  providerLoadBegan,
} from "../actions";
import { keccak256 } from "ethers/lib/utils";
import { GenaratedMerkleTree } from "../../utils/genarateMerkleTree";

const account =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== accountLoadBegan.type) return await next(action);

    const { onStart, onSuccess, onEnd, next1, next2, acc } = action.payload;

    next(action);

    dispatch(onStart());

    try {
      const account =acc || ethers.utils.getAddress((await window.ethereum.request({
          method: "eth_requestAccounts",
        }))[0]);
      const leaf = keccak256(account);
      const hexProof = GenaratedMerkleTree.getHexProof(leaf);
      const proof = GenaratedMerkleTree.getProof(leaf);
      const isValidMerkleProof = GenaratedMerkleTree.verify(
        proof,
        leaf,
        GenaratedMerkleTree.getRoot()
      );
      dispatch(accountLoadSuccess());
      dispatch(onSuccess({ account, hexProof, isValidMerkleProof }));
      dispatch(onEnd());
      dispatch(
        providerLoadBegan({
          onStart: onStart,
          onSuccess: next1,
          onEnd: onEnd,
          next1: next2,
        })
      );
    } catch (error) {
      dispatch(accountLoadFailed());
      dispatch(onSuccess({}));
      dispatch(onEnd());
    }
  };

export default account;
