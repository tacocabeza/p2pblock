import React, {Component} from "react";

import {ethers} from "ethers";
import {Button, Input, Modal, ModalBody, ModalHeader, ModalFooter, Col} from "reactstrap";
import ListView from "./ListView";


export default class Startchat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toAddress: "",
            alias: "",
            msg: "",
            msgObject: "",
            isPopUp: false
        }

    }

    render() {

        return (
            <div>

                {this.renderStartChatButton()}
                {this.renderPopUp()}
                <ListView alias={this.state.alias} msg={this.state.msg} toAddress={this.state.toAddress}>

                </ListView>
            </div>

        )
    }

    renderStartChatButton() {

        return (
            <Col>
                <Col>


                    <Button variant="contained" color="primary" className="w-100" onClick={() => this.togglePopUp()}>Start Chat</Button>
                </Col>

            </Col>
        )
    }

    togglePopUp() {
        this.setState({isPopUp: !this.state.isPopUp});
    }

    buildObjects(){

        let list = [];

        list.push({alias: this.state.alias, msg: this.state.msg, toAddress: this.state.toAddress});

        return list;

    }


    renderPopUp() {
        return (

            <Modal  className="vertical-center" isOpen={this.state.isPopUp} toggle={() => this.togglePopUp()}>
                <div>


                    <ModalHeader c>
                        Start New Chat!
                    </ModalHeader>

                    <ModalBody>
                        <Input name="toAddress" placeholder="Recipient" value={this.state.toAddress}
                               onChange={e => this.setState({toAddress: e.target.value})}/>
                        <Input name="msg" placeholder="message" value={this.state.msg}
                               onChange={e => this.setState({msg: e.target.value})}/>
                        <Input name="alias" placeholder="contact name" value={this.state.alias} onChange={e => this.setState({alias:e.target.value})}/>
                    </ModalBody>
                    <ModalFooter>

                        <Button variant="contained" color="primary" disabled={!this.state.toAddress || !this.state.msg || !this.state.alias} onClick={() => this.compose()}> Send </Button>


                    </ModalFooter>
                </div>


            </Modal>
        )




    }

    compose(){

        try{
            this.props.contract.compose(this.state.toAddress, this.state.msg)
        }catch (e) {
            console.log(e);
        }

    }



}






