/**
 *
 *@type import('hardhat/config').HardhatUserConfig
 */

/*
so i should probably put these constants in a constants.js file
but this is a private repo
 */
require("@nomiclabs/hardhat-waffle");

const INUFRA_PROJ_ID = "872f84c00b664878933265519d0a36e9";

const private_key = "828e1ba67b228c2c6f83ff6ebba0f0aa495e9093eccc3fb573b2a3a78dfdd736";

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.7.3",

  networks:{
    "rinkeby": {
      url: `https://rinkeby.infura.io/v3/${INUFRA_PROJ_ID}`,
      accounts:[`0x${private_key}`]
    }
  }
};

/*
Deploying contracts with the account:  0xE7e1c5f1E5C2ecDD23AB358AB41aea1E627dDa12
Account balance:  [object Promise]
Contract address:  0x5dAD9A7357A3ac3A1F7D3fb785939eBc3699BA21
 */


