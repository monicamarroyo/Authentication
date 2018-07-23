/*
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
//action creator 
import {connect} from 'react-redux';
//import all actions
import * as actions from '../../actions';
//helper in order to connect our action creator to our component
import {compose} from 'redux';
//autocomplete is off

class Signup extends Component {
    
   //onSubmit function that handles when users submits the sign in form and therefore calls the backend api using an action creator
   //formPorms is an object that contains email and password
   //onSubmit = (formProps) => {
    
    //call our signup action creator function which makes an API call to our server 
    //this.props.signup(formProps, () => {
        //if the user is authenciation then we use the history property and send the user to protected route feature
      //  this.props.history.push('/feature');
    //});
    onSubmit = formProps => {
        this.props.signup(formProps, () => {
          this.props.history.push("/feature");
        });
      };
    
    
    render(){
        //we want to call reference 
        const {handleSubmit} = this.props;//this is handled by reduxForm
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    />    
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    /> 
                </fieldset>
                <div>
                    {this.props.errorMessage}
                </div>
                <button>Sign Up</button>
            </form>
        );
    }
}

function mapStateToProps (state) {
    return {errorMessage: state.auth.errorMessage};
}




//wired up the form and we have to give it a name
//helper function from redux in order to connect our action creator with our signup
//inside of compose we can apply as many higher order components it just aviods us having to write so many parthensies
export default compose (
 //currently no pieces of states that we want to wire up
 connect(mapStateToProps,actions),
 reduxForm({form: 'signup'})
)(Signup);



*/
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);
