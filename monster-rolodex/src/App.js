import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstain',
          id: '1'
        },
        {
          name: 'Drakula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        }
      ]
    }
  }
  'https://jsonplaceholder.typicode.com/users'


  render(){
  return (
    <div className="App">
      {this.state.monsters.map(monster => 
        <h1 key={monster.id}>{monster.name}</h1>
      )}
    </div>
  );
  }
}

export default App;
