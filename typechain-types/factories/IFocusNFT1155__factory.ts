/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFocusNFT1155, IFocusNFT1155Interface } from "../IFocusNFT1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "creators",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFocusNFT1155__factory {
  static readonly abi = _abi;
  static createInterface(): IFocusNFT1155Interface {
    return new utils.Interface(_abi) as IFocusNFT1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFocusNFT1155 {
    return new Contract(address, _abi, signerOrProvider) as IFocusNFT1155;
  }
}
