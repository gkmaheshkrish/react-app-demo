import React from 'react';

const getinfo = (props) =>{
    return (<div>
        <h1>Getinfo
        I'm {props.name} and my age is {props.age}
    </h1>
    <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
    </div>
    );
}

export default getinfo;