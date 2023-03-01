//Calcualte merkle root form wihtelist arry
import { keccak256 } from "ethers/lib/utils";
import { MerkleTree } from "merkletreejs";

const whiteList = process.env.REACT_APP_WHITELIST.split("|").map((adderss) =>
  adderss.trim()
);

const leafNodes = whiteList.map((address) => keccak256(address));

export const GenaratedMerkleTree = new MerkleTree(leafNodes, keccak256, {
  sortPairs: true,
});


