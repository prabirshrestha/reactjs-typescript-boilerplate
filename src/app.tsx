import * as React from 'react';
import * as ReactDOM from 'react-dom';

function init() {
    ReactDOM.render(<div>App</div>, document.getElementById('root'), null);
}

init();

if (process.env.NODE_ENV !== 'production') {
    require('preact/devtools');
}
