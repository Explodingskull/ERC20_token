const godav = artifacts.require("godav");

module.exports = function (deployer) {
  deployer.deploy(godav, 1000000);
};
