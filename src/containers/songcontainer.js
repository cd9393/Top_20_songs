import React from "react";
import SongList from "../components/SongList";

class SongContainer extends React.Component{

  constructor(){
    super();

    this.state = {
      songs:[]
    }
  }

componentDidMount(){
  fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
  .then(response => response.json())
  .then(data => this.setState({songs:data.feed.entry}))
}

  render(){
    return(
      <div className = "song-container">
      <SongList songs = {this.state.songs}/>
    </div>
    )
  }
}

export default SongContainer;
