import React from 'react';
import Home from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";

export const HomeIcon = () => {

    let history = useHistory();
    const takeMeHome = () => {
        history.push("/");
    };

    return(
        <Home onClick={takeMeHome} />
    )
}