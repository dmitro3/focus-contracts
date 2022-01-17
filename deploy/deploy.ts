import { Contract, ContractFactory } from "ethers";
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function deploy() {
  // const FocusNFT1155: ContractFactory = await ethers.getContractFactory("FocusNFT1155");
  // const nft1155: Contract = await upgrades.deployProxy(FocusNFT1155, ["ipfs://"]);
  // await nft1155.deployed();

  // console.log("FocusNFT1155 deployed to: ", nft1155.address);

  const FocusMarketplace: ContractFactory = await ethers.getContractFactory("FocusMarketplace");
  const marketplace: Contract = await FocusMarketplace.deploy(
    "0x6d3c7F6dc379E9371530aa0e4A283A20ea0974B6",
    50,
  );
  await marketplace.deployed();

  console.log("FocusMarketplace deployed to: ", marketplace.address);
}

async function main(): Promise<void> {
  await deploy();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
