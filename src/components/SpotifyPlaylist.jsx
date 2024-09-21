function SpotifyPlaylist() {
  return (
    <div className="relative h-[800px] w-[800px] top-32 left-[10rem]">
      <iframe
        className="relative z-50"
        style={{ fontSize: "12px" }}
        src="https://open.spotify.com/embed/playlist/7CLZGBydLBZZpolrZhRM19?utm_source=generator"
        width="56%"
        height="350"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <img
        className="absolute -top-[7.2rem] right-[12.3rem] z-0 object-cover w-full"
        src="images/cabeza.png"
      ></img>
    </div>
  );
}
export default SpotifyPlaylist;
