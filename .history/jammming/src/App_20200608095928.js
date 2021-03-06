import React from 'react';
import './App.css';
import SearchBar from '../src/Components/SearchBar/SearchBar';
import SearchResults from '../src/Components/SearchResults/SearchResults';
import Playlist from '../src/Components/Playlist/Playlist';

function App() {
  constructor(props){
    super(props);
    this.state = {}
  }
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
            <SearchResults />
            <Playlist />
        </div>
      </div>
  </div>
  );
}

export default App;
