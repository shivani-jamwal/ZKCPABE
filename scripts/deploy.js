const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    
    const DataToken = await hre.ethers.getContractFactory("DataToken");
    

    const dataToken = await DataToken.deploy(); 

    console.log("DataToken is being deployed...");

  
    try {
    
        const receipt = await dataToken.deployTransaction.wait();
        
        if (receipt.status === 1) {
            console.log("DataToken deployed successfully!");
            console.log("DataToken deployed to:", dataToken.address);
            console.log("Deployment transaction hash:", dataToken.deployTransaction.hash);
        } else {
            console.error("Deployment failed!");
        }
    } catch (error) {
        console.error("Error waiting for transaction receipt:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error during deployment:", error);
        process.exit(1);
    });
