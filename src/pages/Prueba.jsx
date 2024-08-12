import React from "react";

function Prueba() {
  return (
    <>
      <div className="App">
        <h1>Mi Playlist de Spotify</h1>
        <SpotifyPlaylist initialUrl="https://open.spotify.com/embed/playlist/7CLZGBydLBZZpolrZhRM19?utm_source=generator"></SpotifyPlaylist>
      </div>
    </>
  );
}

export default Prueba;
