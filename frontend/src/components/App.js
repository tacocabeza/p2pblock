import React, { Component } from "react";

import { SnackbarProvider, useSnackbar } from 'notistack';

import Page from "./Page";
import initBlockchain from "../utils/initBlockchain";


export default class App extends Component {


    componentDidMount = async () => {
        try {
            const chatInfo = await initBlockchain(); // from utils directory;  connect to provider and to metamask or other signer
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(`Failed to load provider, signer, or contract. Check console for details.`);
            console.log(error);
        }
    };

    render() {
        return (
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <HookCaller />
            </SnackbarProvider>
        );
    }
}

export const HookCaller = () => {

    const { enqueueSnackbar } = useSnackbar();
    const createSnackBar = (message, variant="error") => enqueueSnackbar(message, { variant: variant });

    return <Page createSnackBar={createSnackBar}/>;
};
