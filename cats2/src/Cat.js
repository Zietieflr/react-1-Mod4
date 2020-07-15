import React, { Component } from 'react'

// Keep track of whether the cat has been fed
// Update a cat's isFed state from false to true

export default class Cat extends Component {
  state = {
    isFed: false,
  }
  render() {  
    return <li>{this.props.name} has {this.state.isFed || 'not '} been fed.</li>
  }
}