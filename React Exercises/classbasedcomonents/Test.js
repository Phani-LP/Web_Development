import React, { Component } from 'react'

class Test extends Component {
  render() {
    return (
      <div>
        Name: {this.props.name}
        Age: {this.props.age}
      </div>
    )
  }
}
export default  Test;