import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { HomeIcon } from './components/HomeIcon';
import { HomeView } from './components/HomeView';
import { BoxView } from './components/BoxView';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export const App = () => {

  const classes = useStyles();

  return (

    <React.Fragment>

      <Router>

        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <HomeIcon/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Inventario de Mudanza
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <Container maxWidth="sm">
            <Switch>
              <Route path='/box/:id'>
                <BoxView />
              </Route>
              <Route path='/'>
                <HomeView />
              </Route>
            </Switch>
        </Container>

      </Router>

    </React.Fragment>
  );
}
