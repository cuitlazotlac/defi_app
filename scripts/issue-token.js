const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(callback) {
  let tokenFarm = await TokenFarm;
  await tokenFarm.issueTokens();
  console.log("Tokens issues !");
  callback();
};
