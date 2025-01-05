const PixelNFT = artifacts.require("PixelNFT");

module.exports = function(deployer) {
  deployer.deploy(PixelNFT);
};