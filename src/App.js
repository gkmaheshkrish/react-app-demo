import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mah', age: 28 },
      { name: 'Malai', age: 29 },
      { name: 'mick', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Mala', age: 29 },
        { name: 'venki', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Mahi', age: 21},
        { name: event.target.value, age: 20 },
        { name: 'imaa', age: 22 }
      ]
    } )
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>working!</p>
        <button onClick={() => this.switchNameHandler('Mahesh!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'GK!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );}
}

export default App;
