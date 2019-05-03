import React from 'react';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'

import './App.css';

class App extends React.Component {

  render() {
    return <div className='App'>
      <Header />
      <SearchBar />
    </div>
  }
}
export default App;
