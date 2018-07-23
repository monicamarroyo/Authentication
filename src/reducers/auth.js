//reducer for authenciation
//this returns data from the store
//this takes our data from our action creator and saves it to our store
//the reason we call it auth user bcs we want to authenciate our user instead of calling it sign up
import {AUTH_USER, AUTH_ERROR} from '../actions/types';

const INITIAL_STATE = {
    authenciated: '',
    errorMessage: ''
};
//create a new state array with all old state plus new state and our authencatied is now action.payload which contains our toekn 
//this is our object defintion which then is stored into our store as AUTH
export default function(state=INITIAL_STATE,action) {
    switch(action.type) {
        case AUTH_USER:
        return {...state,authenciated: action.payload}
        case AUTH_ERROR: 
        return {...state,errorMessage: action.payload}
    default: 
     return state;
    }
    
}