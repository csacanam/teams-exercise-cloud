import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Axios - Promise based HTTP client for the browser and node.js
import axios from 'axios';

class App extends Component {

  //React Component Constructor
  constructor(props) {
    super(props);

    //State - Important in React
    this.state = {
      events: []
    };
  }

  //Component Did Mount - React App Life Cycle
  componentDidMount() {
    //Query
    axios.get('URL_WEB_SERVICE')
      .then(res => {
        //Promise - Result

        //Print result in console
        console.log(res.data.items);
        //Map result and update state
        const events = res.data.items.map(obj => obj);
        this.setState({ events });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        //Events section
       <div>
          <ul>
            //Print all events from state
            {this.state.events.map(event =>
              <li key={event.id}>{event.name}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
