import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

function orderInfo(state = {}, action) {
    if  (action.type === 'cash')  {
        return {
            ...state,
            cash: action.value
        }
    }  else if (action.type === 'newPost') {
        return {
            ...state,
            newPost: action.value
            }
        }   else if (action.type === 'name') {
            return {
                ...state,
                name: action.value
            }
        }   else if (action.type === 'surname') {
                return {
                    ...state,
                    surname: action.value
                }   
            }   else if (action.type === 'email') {
                    return {
                        ...state,
                        email: action.value
                        }
                    }   else if (action.type === 'phone') {
                        return {
                            ...state,
                            phone: action.value
                            }
                        }   else if (action.type === 'comment') {
                            return {
                                ...state,
                                comment: action.value
                                }
                            }
    return state;
} 

const store = createStore(orderInfo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));
