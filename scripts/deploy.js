async function main(){


    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);

    console.log("Account balance: ", (await deployer.getBalance().toString()));

    const Hello = await ethers.getContractFactory("HelloWorld");

    const hi = await Hello.deploy()

    console.log("Contract address: ", hi.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });