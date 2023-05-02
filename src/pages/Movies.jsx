import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import emptyImage from "../assets/undraw_search_engines_ij7q.svg";
import searching from "../assets/search.svg";
import Movie from "../components/ui/Movie.jsx";

let apiLink = "https://www.omdbapi.com/?apikey=581f8664";

function Movies() {
  const { state } = useLocation();

  const [movies, setMovies] = useState([]);
  const [empty, setEmpty] = useState(false);

  async function fetchMovies(searchVal) {
    document.querySelector(".search--loading").style.display = "flex";

    const newSearch = searchVal.replace(/\s/g, "+");
    const { data } = await axios.get(`${apiLink}&s=${newSearch}&plot=full`);

    setEmpty(false);

    if (!data.Error) {
      setMovies(data.Search);
      setEmpty(false);
    } else {
      setMovies([], null);
      setEmpty(true);
    }

    console.log(movies);
    document.querySelector(".search--loading").style.display = "none";
  }

  useEffect(() => {
    if (state) {
      if (state.searchVal) {
        fetchMovies(state.searchVal);
        window.history.replaceState({}, document.title);
      }
    }
  }, [state]);

  return (
    <>
      <div className="search--container">
        <button className="search__btn">
          <FiSearch className="search--icon" />
        </button>
        <input
          type="text"
          placeholder="Search for a Movie, TV show or Documentary"
          className="search--input"
          onKeyPress={(event) =>
            event.key === "Enter" && fetchMovies(event.target.value)
          }
        />
      </div>
      <div className="movies--container">
        <div className="search--loading">
          <AiOutlineLoading3Quarters className="search--loading-icon" />
        </div>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}

        {(!movies || !movies.length) &&
          (!movies.lenght && empty === true ? (
            <div className="movies__searching--container">
              <figure className="movies__searching--wrapper">
                <img
                  src={searching}
                  alt=""
                  className="movies__searching--img"
                />
              </figure>
              <h1 className="searching--title">
                We couldn't find that movie :(
              </h1>
            </div>
          ) : (
            <div className="movies__img--wrapper-empty">
              <img
                src={emptyImage}
                alt="No Movies"
                className="movies__img-empty"
              />
              <h1 className="movies__img-empty--title">
                You haven't searched for anything
              </h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default Movies;
