import React, { Component } from 'react';
import './App.css';
import CaterHistoryNews from './components/caterHistoryNews/caterHistoryNews.js'
import Media from './components/media/Media'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CaterHistoryNews />
        <Media />
      </div>
    );
  }
}

export default App;
