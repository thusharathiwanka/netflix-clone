import { Fragment, useState, useEffect } from "react";
import axios from "../config/axios";

const Row = ({ title, fetchUrl }) => {
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
    <Fragment>
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img src={`${baseURLImg}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
    </Fragment>
  );
};

export default Row;
