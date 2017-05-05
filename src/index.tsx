import './pwa';

import './main.css';

import * as React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Home = () => (
    <div>Home</div>
);

const About = () => (
    <div>About</div>
);

const App = () => (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
        </div>
    </Router>
);

function init() {
    render(<App />, document.getElementById('root'));
}

init();
