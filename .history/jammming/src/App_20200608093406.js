import React from 'react';
import './App.css';
import SearchBar from '../src/Components/SearchBar';
import SearchResults from '../src/Components/SearchResults';
import Playlist from '../src/Components/Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
  </div>
  );
}

export default App;
