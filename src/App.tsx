import React from "react";
import LandingPage from './Components/LandingPage/LandingPage'
// import PointsMap from './Components/PointsMap/PointsMap'
import PointsTable from './Components/PointsTable/PointsTable'

// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
    <LandingPage/>
    <PointsTable />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
