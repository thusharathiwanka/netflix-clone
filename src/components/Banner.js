import { useEffect, useState } from "react";
import axios from "../config/axios";
import requests from "../config/requests";
import "../styles/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const baseURLImg = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovie() {
      const movies = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        movies.data.results[
          Math.floor(Math.random() * movies.data.results.length - 1)
        ]
      );
      return movies;
    }
    fetchMovie();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "banner",
        backgroundImage: `url(${baseURLImg}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
