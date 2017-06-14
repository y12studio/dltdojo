var DDJDTCoin = artifacts.require("./DDJDTCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(DDJDTCoin);
};
