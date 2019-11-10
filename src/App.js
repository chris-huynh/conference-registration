import React from 'react';
import './styles/App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#80ffff',
            main:'#38eeff',
            dark: '#00bbcc',
            contrastText: '#000000'
        },
        secondary: {
            light: '#885eff',
            dark: '#00009f',
            main: '#4e31d2',
            contrastText: '#ffffff',
        }
    },
    typography: {
        useNextVariants: true,
    },
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/login" component={LoginPage}/>
                            <Route exact path="/signup" component={SignUpPage}/>
                            <Route exact path="/" component={LandingPage}/>
                            <Route exact path="/home" component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
