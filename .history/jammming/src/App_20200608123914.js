import React from 'react';
import './App.css';
import SearchBar from '../src/Components/SearchBar/SearchBar';
import SearchResults from '../src/Components/SearchResults/SearchResults';
import Playlist from '../src/Components/Playlist/Playlist';

// function App() 
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
     if (tracks.find(savedTrack => savedTrack.id === track.id)){
       return;
     }
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
              <SearchResults searchResults= {this.state.searchResults} onAdd= {this.addTrack}  />
              <Playlist playlistName= {this.state.playlistName} playlistTracks={this.state.playlistTracks}  />
          </div>
        </div>
    </div>
    );
  }
}

export default App;
