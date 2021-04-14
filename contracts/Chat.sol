pragma solidity ^0.7.3;

contract Chat {

    // note we can change
    // msg to bytes32 if we plan
    // implement encrypting
    struct Message {
        string msg;
        address to;
        address from;
        uint timestamp;
    }

    mapping(address => uint256) private lastMsg;

    mapping(address => mapping(uint256=>Message)) private inbox;

    event sent(address from, address to, uint timestamp, string msg);

    function compose(address to, string memory _msg) external {

        inbox[to][lastMsg[to]].from = msg.sender;
        inbox[to][lastMsg[to]].msg = _msg;
        inbox[to][lastMsg[to]].timestamp = block.timestamp;

        lastMsg[to]++;

        emit sent(msg.sender, to, block.timestamp, _msg);

    }

    function getLastMsg(address who) public view returns (address,string memory,uint){

        return(inbox[who][lastMsg[who]-1].from,inbox[who][lastMsg[who]-1].msg,inbox[who][lastMsg[who]-1].timestamp);
    }





}
