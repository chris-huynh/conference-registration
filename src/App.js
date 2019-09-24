import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload. <br/>
                    Howdy y'all
                </p>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/landing" component={LandingPage}/>
                    </Switch>
                </BrowserRouter>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
