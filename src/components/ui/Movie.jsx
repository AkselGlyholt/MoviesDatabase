import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
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
  }, [movie.Poster]);

  return (
    <Link
      to={`/${movie.imdbID}`}
      state={{ movie: movie }}
      className="movie"
      key={movie.imdbID}
    >
      {!img ? (
        <>
          <figure className="movie__img--wrapper">
            <div className="movie__img movie__img--skeleton"></div>
          </figure>
          <div className="movie__title movie__title--skeleton"></div>
          <div className="movie__date movie__date--skeleton"></div>
        </>
      ) : (
        <>
          <figure className="movie__img--wrapper">
            <img src={movie.Poster} alt="" className="movie__img" />
          </figure>
          <h1 className="movie__title">{movie.Title}</h1>
          <h1 className="movie__date">{movie.Year}</h1>
        </>
      )}
    </Link>
  );
}

export default Movie;
