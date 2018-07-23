/*
//component that is only seen when user is signed up or signed up
import React, {Component} from 'react';
//in order to redirect users who are not singed in using a higher order compoenent
import requireAuth from './requireAuth';

class Feature extends Component {
    render(){
        return <div>This is the feature</div>
    }
}
export default requireAuth(Feature);
*/
import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <div>This is the feature!</div>;
  }
}

export default requireAuth(Feature);