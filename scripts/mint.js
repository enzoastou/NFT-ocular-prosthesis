// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("ocularProsthesis");
  const tiketEvent = await TiketEvent.attach("0xa34bb2f799cba29bb886abfcbc711f1a5776a9fe");

  // Metamask public key 
  // Token uri = metadata URL
  await tiketEvent.mintNFT("0xC5e11bAa8530cd45B9EF40ACC675B9424A97d2C9", "https://gateway.pinata.cloud/ipfs/QmWZin9wNZwEqgFds6afmn7uGcRzSPvUSZU1XrzPYcHbHA");

  console.log(
    ` deployed to ${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});