import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SiRottentomatoes } from "react-icons/si";
import { IoArrowBackOutline } from "react-icons/io5";

let apiLink = "https://www.omdbapi.com/?apikey=581f8664";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(`${apiLink}&i=${id}&plot=full`);

      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    if (movie) {
      const image = new Image();
      image.src = movie.Poster;
      image.onload = () => {
        if (mountedRef.current) {
          setImg(image);
        }
      };
      return () => {
        mountedRef.current = false;
      };
    }
  }, [movie]);

  function getRating() {
    let data = null;

    if (movie.Ratings[1]) {
      data = movie.Ratings[1].Value;
    } else {
      data = "Not Rated";
    }

    return data;
  }

  return (
    <>
      <Link className="movies__back-btn" to="/movies">
        <IoArrowBackOutline />
        Back
      </Link>
      <div className="movies--container2">
        {!img ? (
          <>
            <div className="movies__left">
              <div className="movies__img--wrapper">
                <div className="movies__img movies__img--skeleton"></div>
              </div>
            </div>
            <div className="movies__right">
              <div className="movies__title movies__title--skeleton"></div>
              <div className="movies__top">
                <div className="movies__rating movies__rating--skeleton"></div>
                <div className="movies__date movies__date--skeleton"></div>
              </div>
              <div className="movie__plot movie__plot--skeleton"></div>

              <div className="movies__info movies__info--skeleton"></div>
              <div className="movies__info movies__info--skeleton"></div>
            </div>
          </>
        ) : (
          <>
            <div className="movies__left">
              <div className="movies__img--wrapper">
                <img src={movie.Poster} alt="" className="movies__img" />
              </div>
            </div>
            <div className="movies__right">
              <h1 className="movies__title">{movie.Title}</h1>
              <div className="movies__top">
                <h1 className="movies__rating">
                  {`${getRating()}`} <SiRottentomatoes />
                </h1>
                <h1 className="movies__date">{movie.Released}</h1>
              </div>
              <p className="movie__plot">{movie.Plot}</p>

              <h1 className="movies__info">
                Genres: <span className="movies__info-part">{movie.Genre}</span>
              </h1>

              <h1 className="movies__info">
                Language:{" "}
                <span className="movies__info-part">{movie.Language}</span>
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Movie;
