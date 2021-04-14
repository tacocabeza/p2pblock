const {expect} = require("chai");

let Chat;
let ChatInstance;
let alice,bob;

beforeEach(async function () {
    [alice, bob] = await ethers.getSigners();
    Chat = await ethers.getContractFactory("Chat");
    ChatInstance = await Chat.deploy();
});



describe("Sending Message", function (){

    it("A valid message should trigger the `sent` event to be emitted", async function () {
        let msg = "Hi Bob!";

        await expect(ChatInstance.compose(bob.address, msg))
            .to.emit(ChatInstance, 'sent')

    })
})

describe("Receiving Message", function (){

    it("A Message should be retrievable, (from, to, and timestamp) should be retunred", async function (){
        // first we send a message

        let msg = "Hi Bob!";

        await expect(ChatInstance.compose(bob.address, msg)).to.emit(ChatInstance,'sent');


        let x = await ChatInstance.getLastMsg(bob.address);

        console.log("from",x[0]);
        console.log("msg",x[1]);
        console.log("timestamp", x[2].toNumber() + new Date());
        expect(msg).to.equal(x[1]);

    })
})