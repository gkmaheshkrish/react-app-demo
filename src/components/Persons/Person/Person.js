import React from 'react';
import classes from './Person.module.css';

const person = ( props ) => {
    
    return (
        <div className={classes.Pnerson} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;