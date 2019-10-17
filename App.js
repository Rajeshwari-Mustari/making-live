import React from 'react';
// import React, { Component } from 'react';
// import logo from './logo.svg';s
import './App.css';

class App extends React.Component {
  constructor () {
    super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
  }
  render() {
    // var h1Style = {
    //   fontSize : 200,
    //   color : 'green'
    // }
    return (
      <div className="App">
       {/* <h1 style={h1Style}>Hello world</h1> */}
       <Header/>
       {/* <Content/> */}
       <table>
         <tbody>
           {this.state.data.map((person, i) => <Tablerow key = {i} data = {person} />)}
         </tbody>
       </table>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    var h1Style = {
        fontSize : 100,
        color : 'green'
      }
     return (
        <div>
           <h1 style={h1Style}>Add Table row</h1>
        </div>
     );
  }
}
class Tablerow extends React.Component {
  render() {
     return (
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
        </tr>
     );
  }
}
export default App;
