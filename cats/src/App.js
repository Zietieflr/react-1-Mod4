import React from 'react';
import Cat from './Cat'

class App extends React.Component {
  state = {
    title: 'CATS!',
    cats: [{
      id: 1,
      name: 'Mittens'
    },{
      id: 2,
      name: 'Socks'
    },{
      id: 3,
      name: 'Fangs'
    }]
  }

  render(){
    const { title, cats } = this.state

    const $cats = cats.map(cat => {
      return <Cat key={cat.id} name={cat.name} />
    })
    return (
      <div className="App">
        <h1>{title}</h1>
        <ul>{$cats}</ul>
      </div>
    );
  }
}

export default App;
