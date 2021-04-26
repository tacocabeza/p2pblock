import React, {Component} from "react";

import {ethers} from "ethers";
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chat from "./Chat";
import {Input,Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


export default class ListView extends Component{



    constructor(props) {
        super(props);

        this.state = {
            toAddress: "",
            alias: "",
            lastMessage: "",
            isMessagePopup: false,
            selectedConversation: {},
            msg: ""
        }

    }


    render(){


        let buffer = this.insertConversation();

        console.log("buffer",buffer[0]);

        return (
            <div className="listStyle">

                <List className="root">
                    {buffer}
                </List>

                {this.renderChat()}

            </div>
        )
    }

    insertConversation(){


        let buffer = []



        console.log("Correspondences", this.props.correspondences.length);
        try{


            for(let i = 0; i<this.props.correspondences.length; i++){

                buffer.push(
                    <List className="root">
                        <ListItem onClick={() => this.handleClick(this.props.correspondences, i)} lignItems="flex-start">

                            <ListItemAvatar>
                                <Avatar alt="yeet"/>
                            </ListItemAvatar>


                            <ListItemText primary={this.props.correspondences[i].alias}/>

                            <ListItemText secondary={"User Address: " + this.props.correspondences[i].toAddress}/>



                            <ListItemText primary={this.props.correspondences[i].msg}/>

                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>);

            }




        }catch (e){

        }


        return buffer;

    }

    handleClick(correspondences, index){

        console.log("correspondences", correspondences[index]);


        this.setState({selectedConversation: correspondences[index]});




        this.toggleChat();

    }

    toggleChat(){
    this.setState({isMessagePopup: !this.state.isMessagePopup})
    }



    renderChat(){

        console.log("selected", this.state.selectedConversation);


        console.log(this.state.isMessagePopup);
        return (

            <Modal  className={{
                position:'absolute',
                top:'10%',
                left:'10%',
                overflow:'scroll',
                height:'100%',
                display:'block'
            } } isOpen={this.state.isMessagePopup} toggle={() => this.toggleChat()
            }>
                <div>


                    <ModalHeader>
                        {this.state.selectedConversation.alias}
                        <ListItemText secondary={"User Address: " + this.state.selectedConversation.toAddress}> </ListItemText>
                    </ModalHeader>

                    <ModalBody>
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />
                        {"TEST"}<br />



                    </ModalBody>
                    <ModalFooter>

                        <Input name="user message" placeholder="Send a Message!"/>

                        <Button variant="contained" color="primary">Send</Button>


                    </ModalFooter>
                </div>


            </Modal>
        )
    }

}