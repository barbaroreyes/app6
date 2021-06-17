import React from 'react'
import Amplify ,{API,graphqlOperation}from 'aws-amplify';
import awsconfi from './aws-exports'
import {AmplifySignOut,withAuthenticator}from '@aws-amplify/ui-react'
import './App.css';
Amplify.configure(awsconfi)
function App() {
  return (
    <div className="App">
      <AmplifySignOut/>
        <h1>My app</h1>
    </div>
  );
}

export default withAuthenticator (App);
