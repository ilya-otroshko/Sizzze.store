import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'


const initialState = [
    'First name',
    'Second name'
]

function shop(state = initialState, action) {
    if  (action.type === 'ADD_ITEM')  {
        return [
            ...state,
            action.name
        ];
    }
    return state;
} 

const store = createStore(shop, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

store.dispatch({ type: 'ADD_ITEM', name: 'First item'});
store.dispatch({ type: 'ADD_ITEM', name: 'Second item'});

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
serviceWorker.unregister();
