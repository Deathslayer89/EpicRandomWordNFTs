const main = async () => {
    const nftContractFactory = await ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    let txn = await nftContract.makeAnEpicNFT();
    await txn.wait();

    txn = await nftContract.makeAnEpicNFT();
    await txn.wait();
    console.log("minted 2 epic nfts");
}
main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});