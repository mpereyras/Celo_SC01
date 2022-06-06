require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    "version": "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }  
    }  
  }, 
  networks: {
    Alfajores_TestNet: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      accounts: ['ebcdb80f278ed1dc1b906dce4f622e87c27b3fc6df58f675fcb92ace6d2fb0ea'] // viene de la configuración de la billetera
    }  
  }  
};