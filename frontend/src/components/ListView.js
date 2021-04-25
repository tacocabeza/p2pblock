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
        }

    }


    render(){

        return (
            <div className="listStyle">

                <List className="root">
                    {this.insertConversation()}
                </List>

            </div>
        )
    }

    insertConversation(){

        console.log("alias? ", this.props.alias)
        return(

                <List className="root">
                    <ListItem alignItems="flex-start">

                        <ListItemAvatar>
                            <Avatar alt={this.props.alias}/>
                        </ListItemAvatar>
                        <ListItemText primary={this.props.alias}></ListItemText>
                        <ListItemText
                            secondary={this.props.msg}

                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            )
    }

}