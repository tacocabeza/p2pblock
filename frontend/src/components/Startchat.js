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
            isPopUp: false
        }

    }

    render() {

        return (
            <div>

                {this.renderStartChatButton()}
                {this.renderPopUp()}
                <ListView>

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
                    </ModalBody>
                    <ModalFooter>

                        <Button variant="contained" color="primary" disabled={!this.state.toAddress || !this.state.msg}> Send </Button>


                    </ModalFooter>
                </div>


            </Modal>
        )
    }






}






