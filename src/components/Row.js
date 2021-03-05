import { Fragment, useState, useEffect } from "react";
import axios from "../config/axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchMovies();
  }, [fetchUrl]);

  return (
    <Fragment>
      <h2>{title}</h2>
      <div className="posters"></div>
    </Fragment>
  );
};

export default Row;
