const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    const myEpicNft=await ethers.getContractFactory("MyEpicNft");
    const myEpicNftInstance=await myEpicNft.deployed();
    await myEpicNftInstance.deployed();

    console.log("Deployed to address: ", myEpicNftInstance.address);
  });
});
