import React from "react";

const Song = ({position, title, artist, image}) => {
  return(
    <div className = "song">
    <ul>
      <li className = "position">{position}</li>
      <li className = "image"> <img src = {image} alt = {title}/></li>
      <div className = "text">
        <li>Title: {title}</li>
        <li>Artist: {artist}</li>
      </div>
    </ul>
  </div>
  )
}

// class Song extends React.Component{
//
//   render(){
//     return(
//       <ul>
//         <li>Chart Position: {this.props.position}</li>
//         <li>Title: {this.props.title}</li>
//         <li>Artist: {this.props.artist}</li>
//       </ul>
//     )
//   }
// }

export default Song;
