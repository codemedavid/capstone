import React, { Component } from 'react'

export default class NewComponent extends Component {
    state={
        name: 'Jennifer',
        age: 25,
        mobile: 123456789
    }
  render() {
    return (
      <div>
        <h1>this is a class component</h1>
        <p>Name: {this.state.name}</p>
      </div>
    )
  }
}
