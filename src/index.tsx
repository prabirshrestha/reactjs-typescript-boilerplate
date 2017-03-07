import './pwa';

import './main.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => <div className="app">App</div>;

function init() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

init();
