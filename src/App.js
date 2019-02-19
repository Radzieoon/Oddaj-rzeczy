import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import {Template} from "./components/Template/Template";
import {LandingPage} from "./components/LandingPage/LandingPage";
import {NotFound} from "./components/NotFound/NotFound";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Template>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route component={NotFound} />
                    </Switch>
                </Template>
            </BrowserRouter>
        );
    }
}