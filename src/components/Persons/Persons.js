// jshint esversion: 9
import React, { PureComponent } from "react";
import Person from './Person/Person';

// pure component in the end is just a normal component that already implements shouldComponentUpdate with a complete props check, so that checks for any changes in any prop of that component. So if that is what you need, you can also just use pure component instead of manually implementing this shouldComponentUpdate check.
class Persons extends PureComponent {

  // A static method means the method can be called on the class itself instead of an instance of the class. WON'T WORK. Static methods can only be on the called itself. The reason getDerivedStateFromProps is a static method instead of an instance method is to discourage anyone from updating props or state within it because static methods don't have access to instance variables so it can't touch this.state or this.props.
  // static getDrivedStateFormProps(props, state) {
  //   console.log('[Persons.js] getDrivedStateFormProps');
  //   return state;
  // }

  //  if you have such a scenario where you check all the props of a given component for changes, which is not that uncommon of course because typically you want to make sure that no props of this component changed and you're not just interested in one or two of the properties you are getting, so if you are checking all properties, then you can also not use shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

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
