import Jumbotron from 'react-bootstrap/Jumbotron';


import React, { Component } from 'react'; // let's also import Component


export class LandingPage extends Component<{}, {}> {

  // render will know everything!
  render() {
    return <div><Jumbotron/></div>
  }
}