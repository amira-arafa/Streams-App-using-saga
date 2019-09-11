import React from 'react';
import rootSaga from './sagas'
import ReactDOM from 'react-dom';
import App from "./component/App";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './component/reducers';
// import reduxThunk from 'redux-thunk';
// import configureStore from './configureStore'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

// const store=createStore(reducers,applyMiddleware(reduxThunk));
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.querySelector('#root')
);