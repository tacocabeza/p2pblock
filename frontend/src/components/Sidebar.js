import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {colors} from "@material-ui/core";

function Sidebar() {

    const style = {
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: window.top.outerHeight,
        backgroundColor: colors.amber,
        borderBottom: `1px solid ${colors.amber}`,
        fontWeight: "bold",
        padding: "0px 20px",
        boxSizing: "border-box"
    }
    return (

        <div style={style}>


            <List disablePadding dense>
                <ListItem button>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>Billing</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>Settings</ListItemText>
                </ListItem>
            </List>

        </div>
    )
}

export default Sidebar