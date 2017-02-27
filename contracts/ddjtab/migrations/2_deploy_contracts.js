var Ddjtab = artifacts.require("./Ddjtab.sol");

module.exports = function(deployer) {
  deployer.deploy(Ddjtab, 21000000, "DltDoJo Token AliceBlue", 3 ,"DDJTAB");
};
