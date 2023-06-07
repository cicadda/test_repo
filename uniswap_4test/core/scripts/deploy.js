// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// init hash code

async function main() {
  const Factory = await ethers.getContractFactory("BUniswapV2Factory");
  // 自己钱包就行，是swap的fee地址，但一般没有
  const factory = await Factory.deploy("0x6Aaa23742d62eE5C049652Ca12d86433bB18779E")
  console.log("Contract deployed to address:", factory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
