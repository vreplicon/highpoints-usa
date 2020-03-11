import Jumbotron from 'react-bootstrap/Jumbotron';


import React, { Component } from 'react'; // let's also import Component


export default class LandingPage extends Component<{}, {}> {

  // render will know everything!
  render() {
    return <div><Jumbotron>  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p></Jumbotron></div>
  }
}