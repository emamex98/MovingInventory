import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { QrScanner } from './QrScanner';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingTop: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 25
    }
}));

export const HomeView = () => {

    const classes = useStyles();

    let history = useHistory();
    const openBoxView = (id) => {
        history.push(`/box/${id}`);
    };

    return (
        <React.Fragment>
            
            <div className={classes.header}>
                <Typography variant="h6" gutterBottom component="div">
                    Escaner de QR
                </Typography>
            </div>
            
            <QrScanner/>

            <div className={classes.root}>
                <Typography variant="h6" gutterBottom component="div">
                    Selección Manual
                </Typography>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" size="large">
                    <Button onClick={()=>{openBoxView(1)}}>1</Button>
                    <Button onClick={()=>{openBoxView(2)}}>2</Button>
                    <Button onClick={()=>{openBoxView(3)}}>3</Button>
                    <Button onClick={()=>{openBoxView(4)}}>4</Button>
                    <Button onClick={()=>{openBoxView(5)}}>5</Button>
                </ButtonGroup>
            </div>
        </React.Fragment>
    )

}