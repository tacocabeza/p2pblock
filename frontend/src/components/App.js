
import React, { Component } from "react";

import { SnackbarProvider, useSnackbar } from 'notistack';
import "../static/styles/global.scss"

import Page from "./Page";

export default class App extends Component {

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