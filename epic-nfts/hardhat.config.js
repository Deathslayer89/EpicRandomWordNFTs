require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
  etherscan: {
    apikey:{
     rinkeby:ETHERSCAN_API_KEY,
    },
  }
};
