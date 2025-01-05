// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PixelNFT is ERC721, ERC721URIStorage, Ownable {
    // Track the next token ID
    uint256 private _currentTokenId;

    // Mapping from token ID to price
    mapping(uint256 => uint256) private _tokenPrices;

    // Events
    event NFTMinted(
        address indexed creator,
        uint256 indexed tokenId,
        string uri,
        uint256 price
    );
    event PriceUpdated(uint256 indexed tokenId, uint256 newPrice);

    constructor() ERC721("PixelNFT", "PXNFT") Ownable(msg.sender) {
        _currentTokenId = 0;
    }

    // Mint new NFT
    function mintNFT(
        address recipient,
        string memory uri,
        uint256 price
    ) public returns (uint256) {
        _currentTokenId += 1;
        uint256 newTokenId = _currentTokenId;

        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, uri);
        _tokenPrices[newTokenId] = price;

        emit NFTMinted(recipient, newTokenId, uri, price);

        return newTokenId;
    }

    // Update price of existing NFT
    function updatePrice(uint256 tokenId, uint256 newPrice) public {
        require(
            ownerOf(tokenId) != address(0),
            "PixelNFT: Token does not exist"
        );
        require(
            ownerOf(tokenId) == msg.sender,
            "PixelNFT: Only owner can update price"
        );

        _tokenPrices[tokenId] = newPrice;
        emit PriceUpdated(tokenId, newPrice);
    }

    // Get price of an NFT
    function getPrice(uint256 tokenId) public view returns (uint256) {
        require(
            ownerOf(tokenId) != address(0),
            "PixelNFT: Token does not exist"
        );
        return _tokenPrices[tokenId];
    }

    // Required overrides
    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
