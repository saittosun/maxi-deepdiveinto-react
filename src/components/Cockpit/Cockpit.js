// jshint esversion: 9
import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null)
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // fake http request...
    // setTimeout(() => {
    //   alert('saved data')
    // }, 1000);
    toggleButtonRef.current.click()
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] second useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in second useEffect');
    }
  })
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

//React.memo() does a shallow comparison on its props meaning that it compares if the reference of the persons array is different from the previous reference. The thing is, whenever we trigger nameChangedHandler, it creates a new reference for the persons array which means the Cockpit component will be re-rendered. In order to avoid that, we pass in the length only instead of the entire persons array and now React.memo() can just check if the length has changed
export default React.memo(Cockpit);
