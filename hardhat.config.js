require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/xPACxJYzW3ovyVZS_NMuOHO-BZaKcF2d",
      accounts:["15f96b02e73bf0b049d60fe630ffdd3e013637751f708662c856b00615047dfe"],
    },
  },
};