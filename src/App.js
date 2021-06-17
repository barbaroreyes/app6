import React from 'react';
import {Switch,Route, Link} from 'react-router-dom'
import Amplify ,{API,graphqlOperation}from 'aws-amplify';
import awsconfi from './aws-exports'
import {AmplifySignOut,withAuthenticator}from '@aws-amplify/ui-react'
import './App.css';
Amplify.configure(awsconfi)
function App() {
  return (
    <div className="App">
      <Link to='/home'></Link>
      <Switch>
        <Route exact path="/">
         hello
        </Route>
      </Switch>
      <AmplifySignOut/>
        <h1>My app</h1>
    </div>
  );
}

export default withAuthenticator (App);
