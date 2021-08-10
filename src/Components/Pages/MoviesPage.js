import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
// eslint-disable-next-line
import { Component } from "react";
import FetchMovie from "../../ServiseApi/FetchMovie";
import SearchBar from "../SerchBar";
// eslint-disable-next-line
import MovieList from "../MovieList";

export default function MoviesPage() {
  // eslint-disable-next-line
  const history = useHistory();
  const location = useLocation();
  let { url } = useRouteMatch();
  const [query, setQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchSearchFilm = async () => {
      return FetchMovie.fetchMovieByQuery({ query }).then(setMoviesList);
    };
    fetchSearchFilm();
  }, [query]);

  const handleFormData = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <h1>Movies</h1>
      {/* <form action='submit' onSubmit={heandleSubmit}>
            <input
              type='text'
              name='search'
              value={query}
              // id='id-1'
              onChange={heandleSearch}
              />
              <button type='submit'>Search</button>
          </form> */}
      <SearchBar onSubmitBar={handleFormData} />
      {moviesList && (
        <ul>
          {moviesList.map((el) => (
            <li key={el.id}>
              <Link
                to={{ pathname: `${url}/${el.id}`, state: { from: location } }}
              >
                {el.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
