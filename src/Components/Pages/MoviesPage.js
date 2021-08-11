import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import styles from "./styles.module.css";

import FetchMovie from "../../ServiseApi/FetchMovie";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [moviesList, setMoviesList] = useState(null);
  const history = useHistory();
  const location = useLocation();
  let { url } = useRouteMatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const queryF = new URLSearchParams(location.search).get("query");

    FetchMovie.fetchMovieByQuery(queryF)
      .then((data) => {
        setMoviesList(data);
      })
      .catch((error) => console.warn(error))
      .finally(() => {
        setQuery("");
      });
  }, [location.search]);

  return (
    <>
      <div>
        <form action="submit" onSubmit={handleFormSubmit}>
          <input
            type="text"
            autoComplete="off"
            name="search"
            placeholder=" input name films "
            onChange={handleInputChange}
            value={query}
          />
          <button className={styles.btnS} type="submit">
            Search
          </button>
        </form>
      </div>
      {moviesList && (
        <ul>
          {moviesList.map((m) => (
            <li key={m.id}>
              <Link
                to={{ pathname: `${url}/${m.id}`, state: { from: location } }}
              >
                {m.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
