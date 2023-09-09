
const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  await chai.waitForDeployment();//deploying your smart contract

  console.log("Deployed contract address:",`${ await chai.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xa64e3144835aF8781c750ceC432784a68d883266
//0x892b08082aCd6Ce8016C95D11468be097dd58748 local blockchin
//0x8f0c6fae5a61c673b8582b064cc2e50411dbf1ef  original contract adress
