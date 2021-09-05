const TheToken = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(TheToken);
};