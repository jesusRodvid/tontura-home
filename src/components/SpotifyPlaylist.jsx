import React, { useState, useEffect } from "react";

function SpotifyPlaylist() {

  return (
    <div className="relative h-[800px] w-[800px]"><img
      className="absolute -top-40 z-30 object-cover w-full"
      src="images/mascara.png"></img>
      <iframe 
        style={{ fontSize: '12px' }}
        src="https://open.spotify.com/embed/playlist/7CLZGBydLBZZpolrZhRM19?utm_source=generator"
        width="70%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>


    </div>
      


  );
}


export default SpotifyPlaylist;
