import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import withClass from '../../../hoc/withClass';
// import Aux from '../../../hoc/Auxiliary';

import classes from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
  }

  render() {
    console.log('[Person.js] is rendering...');
    return (
      <>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // ref={(inputEl) => { this.inputElement = inputEl }} 
          ref={this.inputElementRef}
        />
      </>

    )
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);