import './pwa';

const styles = require('./app.css') as any;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

function init() {
    ReactDOM.render(<div className={styles.app}>App</div>, document.getElementById('root'));
}

init();

if (process.env.NODE_ENV !== 'production') {
    require('preact/devtools');
}
