import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    ReactDOM.render(<h1>Yuup</h1>, document.getElementById('root'))
})