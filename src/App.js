import React from 'react';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import DisplayList from './Components/DisplayList'

import './App.css';

class App extends React.Component {

  render() {
    return <div className='App'>
      <Header />
      <SearchBar />
      <DisplayList />
    </div>
  }
}
export default App;
