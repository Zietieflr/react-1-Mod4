import React, { Component } from 'react';
import './App.css';
import Cats from './Cat'

class App extends Component {
  title = 'Cats!'
  state = {
    cats : [{
      name: 'Mittens'
    },{
      name: 'Smittens'
    },{
      name: 'Bittens'
    }]
  }

  render() {
    const $cats = this.state.cats.map(cat => {
      return <Cats key={cat.name} name={cat.name} />
    })
    return (
      <div className="App">
        <h1>{this.title}</h1>
        <ul>
          {$cats}
        </ul>
      </div>
    );
  }
}

export default App;
