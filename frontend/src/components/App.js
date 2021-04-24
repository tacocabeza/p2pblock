import React, { Component } from "react";
import {chat} from "../utils/constants.js";
import {ethers} from "ethers";
import Web3 from "web3";


export default class App extends Component {


    componentDidMount = async () => {
        this.loadBlockchainData();
    };


    async loadBlockchainData(){

        let provider;
        window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));

        const signer = provider.getSigner();

        console.log("signer", signer);

        let userAddress;
        try {
            userAddress =  await signer.getAddress();
            console.log("user address", userAddress);
        }catch (e) {
            console.log(e)
        }



        let chatInstance = new ethers.Contract('0x5dAD9A7357A3ac3A1F7D3fb785939eBc3699BA21', chat.abi, signer);

        this.setState({userAddress:userAddress, contract:chatInstance});

        console.log("lesss gooo",chatInstance)
    }

    constructor(props) {
        super(props);

        this.state = {
            userAccount: '',
            toAccount: '',
            msg: '',
            contract: null,

        }
    }



    render() {


        try{

            this.state.contract.compose("0x58F57681d4C519Dbc30261d4cD080825A55c4380","OOF");


        }catch (e) {
            console.log(e)
        }
        return (
            <h1>HI</h1>
        );
    }
}
