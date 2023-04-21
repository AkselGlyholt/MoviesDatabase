import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchBox() {
  const [search, setSearch] = useState(null);

  let navigate = useNavigate();

  function handleKeyPress(value) {
    navigate("/movies", { state: { searchVal: value } });
  }

  return (
    <div className="search__box--container">
      <div className="search__box--content">
        <h1 className="search__box--title">Welcome!</h1>
        <h2 className="search__box--sub-title">
          Millions of movies, TV Shows and Documentary
        </h2>
        <div className="search__box--search">
          <input
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for a movie, TV Show or Documentary"
            type="text"
            className="search__box--search-input"
            onKeyPress={(event) =>
              event.key === "Enter" && handleKeyPress(event.target.value)
            }
          />
          <Link
            to="/movies"
            state={{ searchVal: search }}
            className="search__box--btn"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
