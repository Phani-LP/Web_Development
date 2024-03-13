import Test from './Test'
import React from "react";
class App extends React.Component {
  state = {name:'phani', age:25}
  render(){return(
    <div>
      <Test name={this.state.name} age={this.state.age} />
    </div>
  )}
}
export default App;




// import React, { Component } from 'react'

// class App extends Component {
//   //Here employeeDetails is state.
//   employeeDetails = {
//     name:'Phani',
//     age:20
//   }
  

//   render() {
//     return (
//       <div>
//        <center>
//         name: {this.employeeDetails.name} age:{this.employeeDetails.age}
//        </center>
//       </div>
//     )
//   }
// }

// export default App