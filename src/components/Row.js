import { useState, useEffect } from "react";
import axios from "../config/axios";
import "../styles/Row.css";

const Row = ({ title, fetchUrl, isLarger }) => {
  const baseURLImg = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLarger && "row__poster-large"}`}
            key={movie.id}
            src={`${baseURLImg}${
              isLarger ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
