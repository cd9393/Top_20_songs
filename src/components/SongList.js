import React from "react";
import Song from "./Song";

const SongList =  (props) =>{

  if(!props.songs) return <h1> not working </h1>;

  const songNodes = props.songs.map((song,index) => {
    return(
      <Song key = {index} title = {song["im:name"]["label"]} position = {index + 1} artist = {song["im:artist"]["label"]} image = {song["im:image"][2]["label"]}/>
    )
  })

  return(
    <div className = "song-list">
    {songNodes}
  </div>
  )
}

// class SongList extends React.Component{
//
//   render(){
//     return(
//       <Song/>
//     )
//   }
// }

export default SongList;
