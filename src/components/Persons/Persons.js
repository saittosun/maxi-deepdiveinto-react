// jshint esversion: 9
import React, { Component } from "react";
import Person from './Person/Person';

class Persons extends Component {

  // A static method means the method can be called on the class itself instead of an instance of the class. WON'T WORK. Static methods can only be on the called itself. The reason getDerivedStateFromProps is a static method instead of an instance method is to discourage anyone from updating props or state within it because static methods don't have access to instance variables so it can't touch this.state or this.props.
  // static getDrivedStateFormProps(props, state) {
  //   console.log('[Persons.js] getDrivedStateFormProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidMount');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] is rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;
