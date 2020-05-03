import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "../routes";

import "./../assets/scss/App.scss";

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <Router>
              <Routes />
            </Router>
        );
    }
}

declare let module: object;

export default hot(module)(App);
