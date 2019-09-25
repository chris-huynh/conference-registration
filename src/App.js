import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/LandingPage";
import BoilerPlate from './pages/BoilerPlate'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/landing" component={LandingPage}/>
                        <Route exact path="/" component={BoilerPlate}/>
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
