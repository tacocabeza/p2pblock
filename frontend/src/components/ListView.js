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


export default class ListView extends Component{



    constructor(props) {
        super(props);

        this.state = {
            toAddress: "",
            alias: "",
            lastMessage: "",
            isMessagePopup: false
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


        this.setState({isMessagePopup: true});

        console.log("YOOOOO", correspondences[index].toAddress);

    }



    buildMessageWidget(selectedMessage){





    }

}