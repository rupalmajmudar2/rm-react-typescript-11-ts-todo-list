import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

//ReactDOM.render(<App />, document.querySelector('#root')); 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
); 