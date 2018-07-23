/*
//action creator
import {AUTH_USER, AUTH_ERROR} from './types';
import axios from 'axios';


//dispath is middlewear that intervines our action creator and dispatches it to another action it usually => return dispatch => {} 
//we are distructuring the email,password from our props argumement signup(props) and creating a new object inside of our post objecet email:email password:password but since es6 syntax we can just send it as is so know we dont have to distructure it we can just leave it as formProps and send it t the post as well
//callback is the function that takes the history.push and sends user to feature page

export const signup= (formProps, callback) => async dispatch => {
//response can either be token or error 
//try catch error in order to catch error if user is not authenciated
try {
    const response = await axios.post('http://localhost:3090/signup',formProps);
    //dispatch = middlewear 
    //to get the token from the response
    dispatch({type: AUTH_USER,payload: response.data.token});
    //make sure user gets automatically redirected
    //localStorage is a function provided by web broswer developer tool that stores local storage, this is needed bcs everytime we refresh the page to our feature page once logged in it takes us back to home root page. the broswer deletes our state therefore not making use of our authentication
    //we store our token
    localStorage.setItem('token',response.data.token);
    callback();
 
    //if error
}catch(e) {
    dispatch({type: AUTH_ERROR,payload: 'Email in use'});
}

    
};
export const signin = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        'http://localhost:3090/signin',
        formProps
      );
  
      dispatch({ type: AUTH_USER, payload: response.data.token });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
  };

export const signout =() => {
    //clear local storage it deletes this from our local storage
    localStorage.removeItem('token');
    //reusing this type and by signing up for an empty peice of state

    return {
        type: AUTH_USER,
        payload: ''
    }
};
*/
import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signin',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};