require("hardhat");
const { CRYPTO_DEVS_CONTRACT_ADDRESS } = require('../constants');

async function main() {
  const cryptoDevTokenContract = await ethers.getContractFactory('CryptoDevToken');
  const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy(CRYPTO_DEVS_CONTRACT_ADDRESS);

  await deployedCryptoDevTokenContract.deployed();

  console.log('Crypto Dev Token Contract Address: ', deployedCryptoDevTokenContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
