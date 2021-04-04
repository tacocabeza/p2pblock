const {expect} = require("chai");


describe("Hello World", function (){

    it("Hello World should be returned", async function () {
        const [owner] = await ethers.getSigners();

        const Hello = await ethers.getContractFactory("HelloWorld");

        const instance = await Hello.deploy();

        const string = await instance.get();

        expect(string).to.equal("hello world!");

    })
})