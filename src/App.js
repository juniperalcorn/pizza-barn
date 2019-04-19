import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js'
import CaterHistoryNews from './components/caterHistoryNews/caterHistoryNews.js'
import Media from './components/media/Media'
import Menu from './components/menu/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <Menu />
        <CaterHistoryNews /> */}
        <Media />
      </div>
    );
  }
}

export default App;
