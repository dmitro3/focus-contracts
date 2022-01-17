/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FocusMarketplace,
  FocusMarketplaceInterface,
} from "../FocusMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_feeRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_platformFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ItemCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pricePerItem",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startingTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPrivate",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "allowedAddress",
        type: "address",
      },
    ],
    name: "ItemListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ItemSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "ItemUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "platformFee",
        type: "uint256",
      },
    ],
    name: "UpdatePlatformFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "platformFeeRecipient",
        type: "address",
      },
    ],
    name: "UpdatePlatformFeeRecipient",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_owner",
        type: "address",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "cancelListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeReceipient",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "focus721",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerItem",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startingTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_allowedAddress",
        type: "address",
      },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerItem",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startingTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_royalty",
        type: "uint8",
      },
    ],
    name: "registerRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "royalties",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "updateListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_platformFee",
        type: "uint256",
      },
    ],
    name: "updatePlatformFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_platformFeeRecipient",
        type: "address",
      },
    ],
    name: "updatePlatformFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001d6d38038062001d6d833981016040819052610031916100b6565b61003a33610066565b60018055600455600580546001600160a01b0319166001600160a01b03929092169190911790556100ee565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100c8578182fd5b82516001600160a01b03811681146100de578283fd5b6020939093015192949293505050565b611c6f80620000fe6000396000f3fe6080604052600436106100e85760003560e01c8063aa0b59881161008a578063e894982211610059578063e8949822146102dd578063f2fde38b146102fd578063f5fe7f711461031d578063f772adf11461033d57600080fd5b8063aa0b59881461025d578063b2ddee061461027d578063cd8ebb221461029d578063e178686e146102bd57600080fd5b80636bd3a64b116100c65780636bd3a64b14610163578063715018a6146101e85780637f77f574146101fd5780638da5cb5b1461023f57600080fd5b8063259ca365146100ed57806326232a2e146101025780633740ebb31461012b575b600080fd5b6101006100fb366004611a1b565b61035d565b005b34801561010e57600080fd5b5061011860045481565b6040519081526020015b60405180910390f35b34801561013757600080fd5b5060055461014b906001600160a01b031681565b6040516001600160a01b039091168152602001610122565b34801561016f57600080fd5b506101bf61017e3660046119da565b60036020818152600094855260408086208252938552838520905290835291208054600182015460028301549290930154909291906001600160a01b031684565b604080519485526020850193909352918301526001600160a01b03166060820152608001610122565b3480156101f457600080fd5b50610100610c29565b34801561020957600080fd5b5061022d610218366004611b1b565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610122565b34801561024b57600080fd5b506000546001600160a01b031661014b565b34801561026957600080fd5b50610100610278366004611b1b565b610c8f565b34801561028957600080fd5b506101006102983660046119af565b610d25565b3480156102a957600080fd5b506101006102b8366004611a63565b610dfb565b3480156102c957600080fd5b5060065461014b906001600160a01b031681565b3480156102e957600080fd5b506101006102f8366004611ac0565b611138565b34801561030957600080fd5b50610100610318366004611977565b6112b3565b34801561032957600080fd5b50610100610338366004611977565b611395565b34801561034957600080fd5b50610100610358366004611a2f565b61143d565b600260015414156103b55760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026001556001600160a01b038084166000908152600360209081526040808320868452825280832093851683529290522080546104285760405162461bcd60e51b815260206004820152601060248201526f2737ba103634b9ba32b21034ba32b69760811b60448201526064016103ac565b6040516301ffc9a760e01b8152636cdb3d1360e11b60048201526001600160a01b038516906301ffc9a79060240160206040518083038186803b15801561046e57600080fd5b505afa158015610482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a69190611afb565b1561057a578054604051627eeac760e11b81526001600160a01b038481166004830152602482018690528692919083169062fdd58e9060440160206040518083038186803b1580156104f757600080fd5b505afa15801561050b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052f9190611b33565b10156105745760405162461bcd60e51b81526020600482015260146024820152732737ba1037bbb734b733903a34329034ba32b69760611b60448201526064016103ac565b506105c2565b60405162461bcd60e51b815260206004820152601460248201527f496e76616c6964204e465420616464726573732e00000000000000000000000060448201526064016103ac565b60028101544210156106165760405162461bcd60e51b815260206004820152601860248201527f4974656d206973206e6f742062757961626c65207965742e000000000000000060448201526064016103ac565b806001015434101561066a5760405162461bcd60e51b815260206004820152601e60248201527f4e6f7420656e6f75676820616d6f756e7420746f20627579206974656d2e000060448201526064016103ac565b60038101546001600160a01b0316156106e35760038101546001600160a01b031633146106e35760405162461bcd60e51b815260206004820152602160248201527f596f7520617265206e6f7420656c696761626c6520746f20627579206974656d6044820152601760f91b60648201526084016103ac565b60006107066103e8610700600454346116ba90919063ffffffff16565b906116cd565b6005546040519192506000916001600160a01b039091169083908381818185875af1925050503d8060008114610758576040519150601f19603f3d011682016040523d82523d6000602084013e61075d565b606091505b50509050806107d45760405162461bcd60e51b815260206004820152602560248201527f466f6375734d61726b6574706c6163653a20466565207472616e73666572206660448201527f61696c656400000000000000000000000000000000000000000000000000000060648201526084016103ac565b6040516366a9e84760e11b8152600481018690526000906001600160a01b0388169063cd53d08e90602401602060405180830381600087803b15801561081957600080fd5b505af115801561082d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108519190611993565b6001600160a01b031614158015610878575060008581526002602052604090205460ff1615155b156109ff576000858152600260205260408120546108aa906064906107009060ff166108a434886116d9565b906116ba565b6040516366a9e84760e11b8152600481018890529091506000906001600160a01b0389169063cd53d08e90602401602060405180830381600087803b1580156108f257600080fd5b505af1158015610906573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092a9190611993565b6001600160a01b03168260405160006040518083038185875af1925050503d8060008114610974576040519150601f19603f3d011682016040523d82523d6000602084013e610979565b606091505b50509050806109f05760405162461bcd60e51b815260206004820152602c60248201527f466f6d6f4d61726b6574706c6163653a20526f79616c7479206665652074726160448201527f6e73666572206661696c6564000000000000000000000000000000000000000060648201526084016103ac565b6109fa84836116e5565b935050505b60006001600160a01b038516610a1534856116d9565b604051600081818185875af1925050503d8060008114610a51576040519150601f19603f3d011682016040523d82523d6000602084013e610a56565b606091505b5050905080610acd5760405162461bcd60e51b815260206004820152602760248201527f466f6375734d61726b6574706c6163653a204f776e6572207472616e7366657260448201527f206661696c65640000000000000000000000000000000000000000000000000060648201526084016103ac565b60408051602081018252600081529051637921219560e11b81526001600160a01b0389169163f242432a91610b0e91899133918c9160019190600401611b4b565b600060405180830381600087803b158015610b2857600080fd5b505af1158015610b3c573d6000803e3d6000fd5b5050505085610b483390565b6001600160a01b0316866001600160a01b03167f57d8d9cd489eb6f4aa398aa92b49d164d28fde9e7000b5c186bf1b3647a9ebb78a6001610b968a60000154346116cd90919063ffffffff16565b604080516001600160a01b03909416845260208401929092529082015260600160405180910390a48354610bcb9060016116d9565b9093555050506001600160a01b03928316600090815260036020818152604080842095845294815284832093909516825291909352908220828155600180820184905560028201939093550180546001600160a01b03191690558055565b6000546001600160a01b03163314610c835760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ac565b610c8d60006116f1565b565b6000546001600160a01b03163314610ce95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ac565b60048190556040518181527f2644fd26359c107ff7991b6dfc36ce902b334ce4e3891bbecacc5922aa620efa906020015b60405180910390a150565b60026001541415610d785760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103ac565b60026001556001600160a01b03821660009081526003602090815260408083208484528252808320338452909152902054610de85760405162461bcd60e51b815260206004820152601060248201526f2737ba103634b9ba32b21034ba32b69760811b60448201526064016103ac565b610df3828233611741565b505060018055565b6040516301ffc9a760e01b8152636cdb3d1360e11b60048201526001600160a01b038716906301ffc9a79060240160206040518083038186803b158015610e4157600080fd5b505afa158015610e55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e799190611afb565b1561057a5785846001600160a01b03821662fdd58e336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018a905260440160206040518083038186803b158015610ed557600080fd5b505afa158015610ee9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0d9190611b33565b1015610f5b5760405162461bcd60e51b815260206004820152601660248201527f4d75737420686f6c6420656e6f756768204e4654732e0000000000000000000060448201526064016103ac565b6001600160a01b03811663e985e9c5336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260440160206040518083038186803b158015610fb057600080fd5b505afa158015610fc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe89190611afb565b6110345760405162461bcd60e51b815260206004820152601d60248201527f4d75737420626520617070726f766564206265666f7265206c6973742e00000060448201526064016103ac565b506040805160808101825285815260208082018690528183018590526001600160a01b03848116606084015289166000908152600382528381208982529091529182209091336001600160a01b039081168252602080830193909352604091820160002084518155928401516001840155908301516002830155606090920151600390910180546001600160a01b031916918316919091179055859087163360408051888152602081018890529081018690526001600160a01b0385811680156060840152608083015291909116907fe52684a5a20c6fa5a196c62108b480dd4eaf0d45a6d0bbcec2ce39ceff96553b9060a00160405180910390a4505050505050565b6040516301ffc9a760e01b8152636cdb3d1360e11b60048201526001600160a01b038416906301ffc9a79060240160206040518083038186803b15801561117e57600080fd5b505afa158015611192573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b69190611afb565b1561057a57336040516366a9e84760e11b8152600481018490526001600160a01b039182169185169063cd53d08e90602401602060405180830381600087803b15801561120257600080fd5b505af1158015611216573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123a9190611993565b6001600160a01b0316146112905760405162461bcd60e51b815260206004820152601860248201527f4e6f74206d696e746572206f662074686973206974656d2e000000000000000060448201526064016103ac565b600091825260026020526040909120805460ff191660ff90921691909117905550565b6000546001600160a01b0316331461130d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ac565b6001600160a01b0381166113895760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103ac565b611392816116f1565b50565b6000546001600160a01b031633146113ef5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ac565b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527fe57e7c1f36cc83fade34e32351e6eee7eb9da532662b1b5da10c631e8222aca790602001610d1a565b600260015414156114905760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103ac565b60026001556001600160a01b03831660009081526003602090815260408083208584528252808320338452909152902080546115015760405162461bcd60e51b815260206004820152601060248201526f2737ba103634b9ba32b21034ba32b69760811b60448201526064016103ac565b6040516301ffc9a760e01b8152636cdb3d1360e11b60048201526001600160a01b038516906301ffc9a79060240160206040518083038186803b15801561154757600080fd5b505afa15801561155b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157f9190611afb565b1561057a57805484906001600160a01b03821662fdd58e336040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810188905260440160206040518083038186803b1580156115dd57600080fd5b505afa1580156115f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116159190611b33565b101561165a5760405162461bcd60e51b81526020600482015260146024820152732737ba1037bbb734b733903a34329034ba32b69760611b60448201526064016103ac565b5060018101829055826001600160a01b038516336001600160a01b03167f3c33e65e8698294810b631d476d60b44425303828da0b1f8b635231bfda12be2856040516116a891815260200190565b60405180910390a45050600180555050565b60006116c68284611c01565b9392505050565b60006116c68284611be1565b60006116c68284611c20565b60006116c68284611bc9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03838116600081815260036020818152604080842088855282528084208787168552825292839020835160808101855281548152600182015492810192909252600281015482850152909101549093166060840152516301ffc9a760e01b8152636cdb3d1360e11b60048201526301ffc9a79060240160206040518083038186803b1580156117d657600080fd5b505afa1580156117ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180e9190611afb565b1561057a57805184906001600160a01b03821662fdd58e336040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810188905260440160206040518083038186803b15801561186c57600080fd5b505afa158015611880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a49190611b33565b10156118e95760405162461bcd60e51b81526020600482015260146024820152732737ba1037bbb734b733903a34329034ba32b69760611b60448201526064016103ac565b506001600160a01b03848116600081815260036020818152604080842089855282528084209588168085529582528084208481556001810185905560028101949094559290910180546001600160a01b031916905590518681529192917f9ba1a3cb55ce8d63d072a886f94d2a744f50cddf82128e897d0661f5ec623158910160405180910390a350505050565b600060208284031215611988578081fd5b81356116c681611c4d565b6000602082840312156119a4578081fd5b81516116c681611c4d565b600080604083850312156119c1578081fd5b82356119cc81611c4d565b946020939093013593505050565b6000806000606084860312156119ee578081fd5b83356119f981611c4d565b9250602084013591506040840135611a1081611c4d565b809150509250925092565b6000806000606084860312156119ee578283fd5b600080600060608486031215611a43578283fd5b8335611a4e81611c4d565b95602085013595506040909401359392505050565b60008060008060008060c08789031215611a7b578182fd5b8635611a8681611c4d565b95506020870135945060408701359350606087013592506080870135915060a0870135611ab281611c4d565b809150509295509295509295565b600080600060608486031215611ad4578283fd5b8335611adf81611c4d565b925060208401359150604084013560ff81168114611a10578182fd5b600060208284031215611b0c578081fd5b815180151581146116c6578182fd5b600060208284031215611b2c578081fd5b5035919050565b600060208284031215611b44578081fd5b5051919050565b60006001600160a01b03808816835260208188168185015286604085015285606085015260a06080850152845191508160a0850152825b82811015611b9e5785810182015185820160c001528101611b82565b82811115611baf578360c084870101525b5050601f01601f19169190910160c0019695505050505050565b60008219821115611bdc57611bdc611c37565b500190565b600082611bfc57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611c1b57611c1b611c37565b500290565b600082821015611c3257611c32611c37565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461139257600080fdfea164736f6c6343000804000a";

type FocusMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FocusMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FocusMarketplace__factory extends ContractFactory {
  constructor(...args: FocusMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _feeRecipient: string,
    _platformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FocusMarketplace> {
    return super.deploy(
      _feeRecipient,
      _platformFee,
      overrides || {}
    ) as Promise<FocusMarketplace>;
  }
  getDeployTransaction(
    _feeRecipient: string,
    _platformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _feeRecipient,
      _platformFee,
      overrides || {}
    );
  }
  attach(address: string): FocusMarketplace {
    return super.attach(address) as FocusMarketplace;
  }
  connect(signer: Signer): FocusMarketplace__factory {
    return super.connect(signer) as FocusMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FocusMarketplaceInterface {
    return new utils.Interface(_abi) as FocusMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FocusMarketplace {
    return new Contract(address, _abi, signerOrProvider) as FocusMarketplace;
  }
}
