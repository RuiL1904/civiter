const { ethers } = require("hardhat");

const privateKey = process.env.PRIVATE_KEY;

async function main() {
  // Create a wallet instance from the private key
  const wallet = new ethers.Wallet(privateKey);

  console.log("Deploying contracts with the account:", wallet.address);
  // console.log("Account balance:", (await wallet.getBalance()).toString());

   // Connect the wallet to a provider
  // const provider = new ethers.providers.JsonRpcProvider("https://alpha-rpc.scroll.io/12");
  // const connectedWallet = wallet.connect(provider);

  // Deploy the contract using the connected wallet
  const Confido = await ethers.getContractFactory("Confido");
  console.log("Deploying Confido contract...");
  // const confido = await Confido.deploy({ gasPrice: 1000000000, gasLimit: 1000000 }).connect(connectedWallet);
  const confido = await Confido.deploy();
  // const confido = await Confido.deploy().then((contract) => contract.deployed());

  console.log("Confido contract deployed to address:", confido.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
