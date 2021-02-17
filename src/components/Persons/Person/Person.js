import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/withClass';
// import Aux from '../../../hoc/Auxiliary';

import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] is rendering...');
    return (
      <>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </>

    )
  }
};

export default withClass(Person, classes.Person);