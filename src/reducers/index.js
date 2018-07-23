//combined reducers call
//this is our store which contains auth, and form which are objects 
//auth contains token and form contains email,password
import {combineReducers} from 'redux';
import auth from './auth';
//redux form reducer
//reducer is the helper and renaming it to form reducer using the as helper
import {reducer as formReducer} from 'redux-form';
//this is the name that is stored inside the store
export default combineReducers({
auth,
form: formReducer

});