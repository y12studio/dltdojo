const DDJBTC = artifacts.require("./DDJBTC.sol");
const DDJETH = artifacts.require("./DDJETH.sol");
const DDJXRP = artifacts.require("./DDJXRP.sol");
const DDJETHT = artifacts.require("./DDJETHToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DDJBTC);
  deployer.deploy(DDJETH);
  deployer.deploy(DDJXRP);
  deployer.deploy(DDJETHT);
};
