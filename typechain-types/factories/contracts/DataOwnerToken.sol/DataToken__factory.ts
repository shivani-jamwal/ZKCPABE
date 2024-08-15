/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  DataToken,
  DataTokenInterface,
} from "../../../contracts/DataOwnerToken.sol/DataToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC1155InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valuesLength",
        type: "uint256",
      },
    ],
    name: "ERC1155InvalidArrayLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC1155InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC1155InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC1155InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC1155MissingApprovalForAll",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentTokenId",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenMetadata",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct DataToken.TokenMetadata",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "tokenMetadata",
    outputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006004553480156200001657600080fd5b5033604051806020016040528060008152506200003981620000c760201b60201c565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000af5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a69190620001e7565b60405180910390fd5b620000c081620000dc60201b60201c565b5062000565565b8060029081620000d891906200047e565b5050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001cf82620001a2565b9050919050565b620001e181620001c2565b82525050565b6000602082019050620001fe6000830184620001d6565b92915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200028657607f821691505b6020821081036200029c576200029b6200023e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003067fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002c7565b620003128683620002c7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200035f6200035962000353846200032a565b62000334565b6200032a565b9050919050565b6000819050919050565b6200037b836200033e565b620003936200038a8262000366565b848454620002d4565b825550505050565b600090565b620003aa6200039b565b620003b781848462000370565b505050565b5b81811015620003df57620003d3600082620003a0565b600181019050620003bd565b5050565b601f8211156200042e57620003f881620002a2565b6200040384620002b7565b8101602085101562000413578190505b6200042b6200042285620002b7565b830182620003bc565b50505b505050565b600082821c905092915050565b6000620004536000198460080262000433565b1980831691505092915050565b60006200046e838362000440565b9150826002028217905092915050565b620004898262000204565b67ffffffffffffffff811115620004a557620004a46200020f565b5b620004b182546200026d565b620004be828285620003e3565b600060209050601f831160018114620004f65760008415620004e1578287015190505b620004ed858262000460565b8655506200055d565b601f1984166200050686620002a2565b60005b82811015620005305784890151825560018201915060208501945060208101905062000509565b868310156200055057848901516200054c601f89168262000440565b8355505b6001600288020188555050505b505050505050565b612a8e80620005756000396000f3fe608060405234801561001057600080fd5b50600436106100f35760003560e01c80636914db6011610097578063d0def52111610066578063d0def52114610297578063e985e9c5146102c7578063f242432a146102f7578063f2fde38b14610313576100f3565b80636914db6014610222578063715018a6146102535780638da5cb5b1461025d578063a22cb4651461027b576100f3565b80630e89341c116100d35780630e89341c146101765780632eb2c2d6146101a65780634e1273f4146101c257806360316801146101f2576100f3565b80629a9b7b146100f8578062fdd58e1461011657806301ffc9a714610146575b600080fd5b61010061032f565b60405161010d91906119c8565b60405180910390f35b610130600480360381019061012b9190611a81565b610335565b60405161013d91906119c8565b60405180910390f35b610160600480360381019061015b9190611b19565b61038f565b60405161016d9190611b61565b60405180910390f35b610190600480360381019061018b9190611b7c565b610471565b60405161019d9190611c39565b60405180910390f35b6101c060048036038101906101bb9190611e58565b610505565b005b6101dc60048036038101906101d79190611fea565b6105ad565b6040516101e99190612120565b60405180910390f35b61020c60048036038101906102079190611b7c565b6106b6565b60405161021991906121d8565b60405180910390f35b61023c60048036038101906102379190611b7c565b6107cb565b60405161024a929190612209565b60405180910390f35b61025b610897565b005b6102656108ab565b6040516102729190612239565b60405180910390f35b61029560048036038101906102909190612280565b6108d5565b005b6102b160048036038101906102ac9190612361565b6108eb565b6040516102be91906119c8565b60405180910390f35b6102e160048036038101906102dc91906123bd565b6109d8565b6040516102ee9190611b61565b60405180910390f35b610311600480360381019061030c91906123fd565b610a6c565b005b61032d60048036038101906103289190612494565b610b14565b005b60045481565b600080600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061045a57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061046a575061046982610b9a565b5b9050919050565b606060028054610480906124f0565b80601f01602080910402602001604051908101604052809291908181526020018280546104ac906124f0565b80156104f95780601f106104ce576101008083540402835291602001916104f9565b820191906000526020600020905b8154815290600101906020018083116104dc57829003601f168201915b50505050509050919050565b600061050f610c04565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614158015610554575061055286826109d8565b155b156105985780866040517fe237d92200000000000000000000000000000000000000000000000000000000815260040161058f929190612521565b60405180910390fd5b6105a58686868686610c0c565b505050505050565b606081518351146105f957815183516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016105f092919061254a565b60405180910390fd5b6000835167ffffffffffffffff81111561061657610615611c60565b5b6040519080825280602002602001820160405280156106445781602001602082028036833780820191505090505b50905060005b84518110156106ab576106816106698287610d0490919063ffffffff16565b61067c8387610d1890919063ffffffff16565b610335565b82828151811061069457610693612573565b5b60200260200101818152505080600101905061064a565b508091505092915050565b6106be61197f565b600560008381526020019081526020016000206040518060400160405290816000820180546106ec906124f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610718906124f0565b80156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60056020528060005260406000206000915090508060000180546107ee906124f0565b80601f016020809104026020016040519081016040528092919081815260200182805461081a906124f0565b80156108675780601f1061083c57610100808354040283529160200191610867565b820191906000526020600020905b81548152906001019060200180831161084a57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b61089f610d2c565b6108a96000610db3565b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108e76108e0610c04565b8383610e79565b5050565b60006108f5610d2c565b60016004600082825461090891906125d1565b9250508190555061092d83600454600160405180602001604052806000815250610fe9565b60405180604001604052808381526020018473ffffffffffffffffffffffffffffffffffffffff16815250600560006004548152602001908152602001600020600082015181600001908161098291906127b1565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600454905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610a76610c04565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614158015610abb5750610ab986826109d8565b155b15610aff5780866040517fe237d922000000000000000000000000000000000000000000000000000000008152600401610af6929190612521565b60405180910390fd5b610b0c8686868686611082565b505050505050565b610b1c610d2c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b8e5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610b859190612239565b60405180910390fd5b610b9781610db3565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610c7e5760006040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610c759190612239565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610cf05760006040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610ce79190612239565b60405180910390fd5b610cfd858585858561118d565b5050505050565b600060208202602084010151905092915050565b600060208202602084010151905092915050565b610d34610c04565b73ffffffffffffffffffffffffffffffffffffffff16610d526108ab565b73ffffffffffffffffffffffffffffffffffffffff1614610db157610d75610c04565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610da89190612239565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610eeb5760006040517fced3e100000000000000000000000000000000000000000000000000000000008152600401610ee29190612239565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610fdc9190611b61565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361105b5760006040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016110529190612239565b60405180910390fd5b600080611068858561123f565b9150915061107a60008784848761118d565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036110f45760006040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016110eb9190612239565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036111665760006040517f01a8351400000000000000000000000000000000000000000000000000000000815260040161115d9190612239565b60405180910390fd5b600080611173858561123f565b91509150611184878784848761118d565b50505050505050565b6111998585858561126f565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146112385760006111d7610c04565b905060018451036112275760006111f8600086610d1890919063ffffffff16565b90506000611210600086610d1890919063ffffffff16565b9050611220838989858589611617565b5050611236565b6112358187878787876117cb565b5b505b5050505050565b60608060405191506001825283602083015260408201905060018152826020820152604081016040529250929050565b80518251146112b957815181516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016112b092919061254a565b60405180910390fd5b60006112c3610c04565b905060005b83518110156114d25760006112e68286610d1890919063ffffffff16565b905060006112fd8386610d1890919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161461142a57600080600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113d257888183856040517f03dee4c50000000000000000000000000000000000000000000000000000000081526004016113c99493929190612883565b60405180910390fd5b81810360008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16146114c5578060008084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114bd91906125d1565b925050819055505b50508060010190506112c8565b5060018351036115915760006114f2600085610d1890919063ffffffff16565b9050600061150a600085610d1890919063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62858560405161158292919061254a565b60405180910390a45050611610565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516116079291906128c8565b60405180910390a45b5050505050565b60008473ffffffffffffffffffffffffffffffffffffffff163b11156117c3578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611678959493929190612954565b6020604051808303816000875af19250505080156116b457506040513d601f19601f820116820180604052508101906116b191906129c3565b60015b611738573d80600081146116e4576040519150601f19603f3d011682016040523d82523d6000602084013e6116e9565b606091505b50600081510361173057846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016117279190612239565b60405180910390fd5b805181602001fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146117c157846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016117b89190612239565b60405180910390fd5b505b505050505050565b60008473ffffffffffffffffffffffffffffffffffffffff163b1115611977578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b815260040161182c9594939291906129f0565b6020604051808303816000875af192505050801561186857506040513d601f19601f8201168201806040525081019061186591906129c3565b60015b6118ec573d8060008114611898576040519150601f19603f3d011682016040523d82523d6000602084013e61189d565b606091505b5060008151036118e457846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016118db9190612239565b60405180910390fd5b805181602001fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461197557846040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161196c9190612239565b60405180910390fd5b505b505050505050565b604051806040016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6000819050919050565b6119c2816119af565b82525050565b60006020820190506119dd60008301846119b9565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a22826119f7565b9050919050565b611a3281611a17565b8114611a3d57600080fd5b50565b600081359050611a4f81611a29565b92915050565b611a5e816119af565b8114611a6957600080fd5b50565b600081359050611a7b81611a55565b92915050565b60008060408385031215611a9857611a976119ed565b5b6000611aa685828601611a40565b9250506020611ab785828601611a6c565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611af681611ac1565b8114611b0157600080fd5b50565b600081359050611b1381611aed565b92915050565b600060208284031215611b2f57611b2e6119ed565b5b6000611b3d84828501611b04565b91505092915050565b60008115159050919050565b611b5b81611b46565b82525050565b6000602082019050611b766000830184611b52565b92915050565b600060208284031215611b9257611b916119ed565b5b6000611ba084828501611a6c565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611be3578082015181840152602081019050611bc8565b60008484015250505050565b6000601f19601f8301169050919050565b6000611c0b82611ba9565b611c158185611bb4565b9350611c25818560208601611bc5565b611c2e81611bef565b840191505092915050565b60006020820190508181036000830152611c538184611c00565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c9882611bef565b810181811067ffffffffffffffff82111715611cb757611cb6611c60565b5b80604052505050565b6000611cca6119e3565b9050611cd68282611c8f565b919050565b600067ffffffffffffffff821115611cf657611cf5611c60565b5b602082029050602081019050919050565b600080fd5b6000611d1f611d1a84611cdb565b611cc0565b90508083825260208201905060208402830185811115611d4257611d41611d07565b5b835b81811015611d6b5780611d578882611a6c565b845260208401935050602081019050611d44565b5050509392505050565b600082601f830112611d8a57611d89611c5b565b5b8135611d9a848260208601611d0c565b91505092915050565b600080fd5b600067ffffffffffffffff821115611dc357611dc2611c60565b5b611dcc82611bef565b9050602081019050919050565b82818337600083830152505050565b6000611dfb611df684611da8565b611cc0565b905082815260208101848484011115611e1757611e16611da3565b5b611e22848285611dd9565b509392505050565b600082601f830112611e3f57611e3e611c5b565b5b8135611e4f848260208601611de8565b91505092915050565b600080600080600060a08688031215611e7457611e736119ed565b5b6000611e8288828901611a40565b9550506020611e9388828901611a40565b945050604086013567ffffffffffffffff811115611eb457611eb36119f2565b5b611ec088828901611d75565b935050606086013567ffffffffffffffff811115611ee157611ee06119f2565b5b611eed88828901611d75565b925050608086013567ffffffffffffffff811115611f0e57611f0d6119f2565b5b611f1a88828901611e2a565b9150509295509295909350565b600067ffffffffffffffff821115611f4257611f41611c60565b5b602082029050602081019050919050565b6000611f66611f6184611f27565b611cc0565b90508083825260208201905060208402830185811115611f8957611f88611d07565b5b835b81811015611fb25780611f9e8882611a40565b845260208401935050602081019050611f8b565b5050509392505050565b600082601f830112611fd157611fd0611c5b565b5b8135611fe1848260208601611f53565b91505092915050565b60008060408385031215612001576120006119ed565b5b600083013567ffffffffffffffff81111561201f5761201e6119f2565b5b61202b85828601611fbc565b925050602083013567ffffffffffffffff81111561204c5761204b6119f2565b5b61205885828601611d75565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612097816119af565b82525050565b60006120a9838361208e565b60208301905092915050565b6000602082019050919050565b60006120cd82612062565b6120d7818561206d565b93506120e28361207e565b8060005b838110156121135781516120fa888261209d565b9750612105836120b5565b9250506001810190506120e6565b5085935050505092915050565b6000602082019050818103600083015261213a81846120c2565b905092915050565b600082825260208201905092915050565b600061215e82611ba9565b6121688185612142565b9350612178818560208601611bc5565b61218181611bef565b840191505092915050565b61219581611a17565b82525050565b600060408301600083015184820360008601526121b88282612153565b91505060208301516121cd602086018261218c565b508091505092915050565b600060208201905081810360008301526121f2818461219b565b905092915050565b61220381611a17565b82525050565b600060408201905081810360008301526122238185611c00565b905061223260208301846121fa565b9392505050565b600060208201905061224e60008301846121fa565b92915050565b61225d81611b46565b811461226857600080fd5b50565b60008135905061227a81612254565b92915050565b60008060408385031215612297576122966119ed565b5b60006122a585828601611a40565b92505060206122b68582860161226b565b9150509250929050565b600067ffffffffffffffff8211156122db576122da611c60565b5b6122e482611bef565b9050602081019050919050565b60006123046122ff846122c0565b611cc0565b9050828152602081018484840111156123205761231f611da3565b5b61232b848285611dd9565b509392505050565b600082601f83011261234857612347611c5b565b5b81356123588482602086016122f1565b91505092915050565b60008060408385031215612378576123776119ed565b5b600061238685828601611a40565b925050602083013567ffffffffffffffff8111156123a7576123a66119f2565b5b6123b385828601612333565b9150509250929050565b600080604083850312156123d4576123d36119ed565b5b60006123e285828601611a40565b92505060206123f385828601611a40565b9150509250929050565b600080600080600060a08688031215612419576124186119ed565b5b600061242788828901611a40565b955050602061243888828901611a40565b945050604061244988828901611a6c565b935050606061245a88828901611a6c565b925050608086013567ffffffffffffffff81111561247b5761247a6119f2565b5b61248788828901611e2a565b9150509295509295909350565b6000602082840312156124aa576124a96119ed565b5b60006124b884828501611a40565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061250857607f821691505b60208210810361251b5761251a6124c1565b5b50919050565b600060408201905061253660008301856121fa565b61254360208301846121fa565b9392505050565b600060408201905061255f60008301856119b9565b61256c60208301846119b9565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125dc826119af565b91506125e7836119af565b92508282019050808211156125ff576125fe6125a2565b5b92915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026126677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261262a565b612671868361262a565b95508019841693508086168417925050509392505050565b6000819050919050565b60006126ae6126a96126a4846119af565b612689565b6119af565b9050919050565b6000819050919050565b6126c883612693565b6126dc6126d4826126b5565b848454612637565b825550505050565b600090565b6126f16126e4565b6126fc8184846126bf565b505050565b5b81811015612720576127156000826126e9565b600181019050612702565b5050565b601f8211156127655761273681612605565b61273f8461261a565b8101602085101561274e578190505b61276261275a8561261a565b830182612701565b50505b505050565b600082821c905092915050565b60006127886000198460080261276a565b1980831691505092915050565b60006127a18383612777565b9150826002028217905092915050565b6127ba82611ba9565b67ffffffffffffffff8111156127d3576127d2611c60565b5b6127dd82546124f0565b6127e8828285612724565b600060209050601f83116001811461281b5760008415612809578287015190505b6128138582612795565b86555061287b565b601f19841661282986612605565b60005b828110156128515784890151825560018201915060208501945060208101905061282c565b8683101561286e578489015161286a601f891682612777565b8355505b6001600288020188555050505b505050505050565b600060808201905061289860008301876121fa565b6128a560208301866119b9565b6128b260408301856119b9565b6128bf60608301846119b9565b95945050505050565b600060408201905081810360008301526128e281856120c2565b905081810360208301526128f681846120c2565b90509392505050565b600081519050919050565b600082825260208201905092915050565b6000612926826128ff565b612930818561290a565b9350612940818560208601611bc5565b61294981611bef565b840191505092915050565b600060a08201905061296960008301886121fa565b61297660208301876121fa565b61298360408301866119b9565b61299060608301856119b9565b81810360808301526129a2818461291b565b90509695505050505050565b6000815190506129bd81611aed565b92915050565b6000602082840312156129d9576129d86119ed565b5b60006129e7848285016129ae565b91505092915050565b600060a082019050612a0560008301886121fa565b612a1260208301876121fa565b8181036040830152612a2481866120c2565b90508181036060830152612a3881856120c2565b90508181036080830152612a4c818461291b565b9050969550505050505056fea264697066735822122071bfb7f49887d1d43fa6e4db1930e9ae3677099eafe64f897e9dcce70efe7b2864736f6c63430008180033";

type DataTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataToken__factory extends ContractFactory {
  constructor(...args: DataTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DataToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DataToken__factory {
    return super.connect(runner) as DataToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataTokenInterface {
    return new Interface(_abi) as DataTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DataToken {
    return new Contract(address, _abi, runner) as unknown as DataToken;
  }
}
