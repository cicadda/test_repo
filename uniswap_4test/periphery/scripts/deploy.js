// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// Factory 0x4c2Bfc56b62A4D50B1b0b7F3D55BBd093f7B98b3

// weth 0xD0dF82dE051244f04BfF3A8bB1f62E1cD39eED92
async function main() {
  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy("0xDe6e31e7811531624246a1D66a142596629a90a3", "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6")
  console.log("Contract deployed to address:", router.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
