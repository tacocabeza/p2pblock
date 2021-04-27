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
import {ChatBubble,Message} from "react-chat-ui";


export default class ListView extends Component{



    constructor(props) {
        super(props);

        this.state = {
            toAddress: "",
            alias: "",
            lastMessage: "",
            isMessagePopup: false,
            selectedConversation: {},
            msg: "",
            sentMessages: [],
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
        console.log("contract boiii", this.props.contract);
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

                        {this.buildSentMessagesList()}

                    </ModalBody>
                    <ModalFooter>

                        <Input name="user message" placeholder="Send a Message!" value={this.state.msg} onChange={e=> this.setState({msg: e.target.value})}/>

                        <Button variant="contained" color="primary" onClick={()=> this.sendMessage(this.state.selectedConversation.toAddress, this.state.msg)}>Send</Button>


                    </ModalFooter>
                </div>


            </Modal>
        )
    }


    sendMessage(to,msg){


        try{
            this.props.contract.compose(to,msg);
        }catch (e) {
            console.log(e);
        }

        let message = new Message({id: 0, message: this.state.msg});

        console.log("message",message)

        let currentlySent = this.state.sentMessages;

        currentlySent.push(message)

        this.setState({sentMessages: currentlySent})

    }

    buildSentMessagesList() {


        let Chatbubbles = [];
        for(let i = 0; i<this.state.sentMessages.length; i++){

                Chatbubbles.push(<ChatBubble message={this.state.sentMessages[i]}></ChatBubble>)

        }

        return Chatbubbles;


    }
}