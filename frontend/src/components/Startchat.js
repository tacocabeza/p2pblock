import React, {Component} from "react";

import {ethers} from "ethers";
import {Button, Input, Modal} from "@material-ui/core";
import {Col, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";

export default class Startchat extends Component{

    constructor(props) {
        super(props);

        this.state = {
            toAddress: "",
            alias: "",
            msg: "",
            isPopUp: false
        }

    }

    render(){

        return(
            <div>
                {this.renderStartChatButton()}
                {this.renderPopUp()}
            </div>
        )
    }

    renderStartChatButton(){

        return(
            <Col>
                <Col>


                    <Button variant="primary" className="w-100" onClick={()=>this.togglePopUp()}>Start Chat</Button>
                </Col>

            </Col>
        )
    }

    togglePopUp(){
        this.setState({isPopUp: !this.state.isPopUp});
    }


    renderPopUp(){
        return (

            <Modal open={this.state.isPopUp} toggle={()=> this.togglePopUp()}>
                <div>



                    <ModalHeader>
                        Start New Chat!
                    </ModalHeader>

                    <ModalBody>
                        <Input name="toAddress" placeholder="Recipient" value={this.state.toAddress} onChange={e => this.setState({toAddress: e.target.value})}/>
                        <Input name="msg" placeholder="message" value={this.state.msg} onChange={e=>this.setState({msg:e.target.value})}/>
                    </ModalBody>
                    <ModalFooter>

                        <Button color="primary" disabled={!this.state.toAddress || !this.state.msg} > Send </Button>


                    </ModalFooter>
                </div>


            </Modal>
        )
    }


}