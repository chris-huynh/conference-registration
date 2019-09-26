import React from 'react';
import './styles/App.css';
import LandingPage from "./pages/LandingPage";
import BoilerPlate from './pages/BoilerPlate'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
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
