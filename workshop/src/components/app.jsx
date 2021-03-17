import React, { Component } from 'react';
import Gif from "./gif";
import SearchBar from "./searchBar";
import GifList from "./gifList";

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene"> 
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene"> right fuck </div>

      </div>
    );
  }
}

export default App;