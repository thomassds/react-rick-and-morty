import React, { Component } from "react";

import history from './routes/history';
import { Router } from 'react-router-dom';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

import 'react-circular-progressbar/dist/styles.css';
import './global.css';

class App extends Component {
  	render() {
    	return (
            <AuthProvider>
		        <Router history={history}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
			        <Routes/>
		        </Router>
            </AuthProvider>
    	) 
  	}
}

export default App;