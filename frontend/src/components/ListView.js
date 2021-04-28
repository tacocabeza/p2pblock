import React, {Component} from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
            userToMessages: {},
            sentMessages: {},
            recievedMessages: {}
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

                        {this.buildSentMessagesList(this.state.selectedConversation.toAddress)}
                        {this.buildRecievedMessages(this.state.selectedConversation.toAddress)}

                    </ModalBody>
                    <ModalFooter>

                        <Input name="user message" placeholder="Send a Message!" value={this.state.msg} onChange={e=> this.setState({msg: e.target.value})}/>

                        <Button variant="contained" color="primary" onClick={()=> this.sendMessage(this.state.selectedConversation.toAddress, this.state.msg)}>Send</Button>


                    </ModalFooter>
                </div>


            </Modal>
        )
    }

    componentDidMount() {
        this.recieveMessage()
    }

    usrToMessagesMapping(to){


        if(this.state.sentMessages[to] == null) {


            console.log("working")

            let arr = []

            let map = this.state.sentMessages


            map[to] = arr

            this.setState({sentMessages: map});
        }



    }

    sendMessage(to,msg){

        console.log("before",this.state.sentMessages[to]);


        this.usrToMessagesMapping(to);

        console.log("after",this.state.sentMessages[to]);



        try{
            this.props.contract.compose(to,msg);
        }catch (e) {
            console.log(e);
        }

        let message = new Message({id: 0, message: this.state.msg});

        console.log("message",message)


        let usrToMessages = this.state.userToMessages;
        let currentlySent = this.state.sentMessages;

        let arr = []

        arr.push = this.state.msg;

        usrToMessages[to] = arr;

        let arrReference = currentlySent[to];

        console.log(currentlySent[to])

        arrReference.push(message);

        this.setState({sentMessages: currentlySent})

    }


     async recieveMessage() {


        console.log("userAddress",this.props.userAccount);
         let object = await this.props.contract.getLastMsg(this.props.userAccount);

         let from = object[0];

         let msg = object[1];

         let timestamp = object[2];

         if(this.state.recievedMessages[from] == null){


             let temp = this.state.recievedMessages;

             let arr = [];

             temp[from] = arr;

             this.setState({recievedMessages:temp});


         }

         let message = new Message({id: 1, message: msg})


         let recievedInstance = this.state.recievedMessages;

         let recieved = recievedInstance[from];

         recieved.push(message);

     }






     buildRecievedMessages(from){
        try{

            let Chatbubbles = [];

            console.log("# of messages", this.state.recievedMessages[from].length)

            console.log("messages",this.state.recievedMessages[from][0])
            for(let i = 0; i<this.state.recievedMessages[from].length; i++){



                Chatbubbles.push(<ChatBubble message={this.state.recievedMessages[from][i]}></ChatBubble>)

            }

            return Chatbubbles;

        }catch (e){
            console.log(e)
        }
    }

    buildSentMessagesList(to) {

        try{

            let Chatbubbles = [];

            console.log("# of messages", this.state.sentMessages[to].length)

            console.log("messages",this.state.sentMessages[to][0])
            for(let i = 0; i<this.state.sentMessages[to].length; i++){



                Chatbubbles.push(<ChatBubble message={this.state.sentMessages[to][i]}></ChatBubble>)

            }

            return Chatbubbles;

        }catch (e){
            console.log(e)
        }

    }
}