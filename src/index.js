/*
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
//making the store
import{Provider} from 'react-redux';
import{createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
//middlewear like promise it takes requests and it inspects them before sending them to the action creator
import reduxThunk from 'redux-thunk';

//initial state from our action creator for localStorage which stores our token 
//if we have a token every time we restart and it should 
const store = createStore(
    reducers,
    {auth: {authenciated: localStorage.getItem('token')}},
    applyMiddleware(reduxThunk)
);

//make app component
//All of our route mappings
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App>
    <Route path="/" exact component={Welcome} />
    <Route path="/signup" component={Signup} />
    <Route path="/feature" component={Feature} />
    <Route path="/signout" component={Signout} />
    <Route path="/signin" component={Signin} />
    </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);