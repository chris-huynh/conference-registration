import React from 'react';
import './styles/App.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <NavBar/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/login" component={LoginPage}/>
                            <Route exact path="/signup" component={SignUpPage}/>
                            <Route exact path="/" component={LandingPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
