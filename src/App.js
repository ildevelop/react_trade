import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rseact</h2>
        </div>
          <CommentBox contest_url='/user.json' title='user'/>
      </div>
    );
  }
}

export default App;
