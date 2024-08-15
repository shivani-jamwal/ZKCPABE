// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DataToken is ERC1155, Ownable {
    uint256 public currentTokenId = 0;

    struct TokenMetadata {
        string cid;
        address owner;
    }

    mapping(uint256 => TokenMetadata) public tokenMetadata;

    
    constructor() ERC1155("") Ownable(msg.sender) {}

    function mint(address _owner, string memory _cid) public onlyOwner returns (uint256) {
        currentTokenId += 1;
        _mint(_owner, currentTokenId, 1, "");

        tokenMetadata[currentTokenId] = TokenMetadata({
            cid: _cid,
            owner: _owner
        });

        return currentTokenId;
    }

    function getTokenMetadata(uint256 _tokenId) public view returns (TokenMetadata memory) {
        return tokenMetadata[_tokenId];
    }
}
