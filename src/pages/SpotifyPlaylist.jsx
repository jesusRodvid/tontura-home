import React, { useState, useEffect } from "react";

function SpotifyPlaylist({ initialUrl }) {
  const [playlistUrl, setPlaylistUrl] = useState(initialUrl);
  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(
    function () {
      // Transformar la URL a la de embed
      const newEmbedUrl = playlistUrl.replace(
        "https://open.spotify.com/",
        "https://open.spotify.com/embed/"
      );
      setEmbedUrl(newEmbedUrl);
    },
    [playlistUrl]
  ); // Se ejecuta cada vez que cambia playlistUrl

  function handleUrlChange(event) {
    setPlaylistUrl(event.target.value);
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        value={playlistUrl}
        onChange={handleUrlChange}
        placeholder="Introduce la URL de la playlist"
        style={{ marginBottom: "10px", width: "80%" }}
      />

      <iframe
        style="border-radius:12px"
        src={embedUrl}
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyPlaylist;
