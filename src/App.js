import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import CaterHistoryNews from './components/caterHistoryNews/caterHistoryNews.js'
import Media from './components/media/Media'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CaterHistoryNews />
        <Media />
      </div>
    );
  }
}

export default App;
