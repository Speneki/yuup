import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchBusiness, fetchBusinesses } from './actions/business_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTIN
    
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.fetchBusiness = fetchBusiness;
    window.fetchBusinesses = fetchBusinesses

    // TESTIN 
    ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})