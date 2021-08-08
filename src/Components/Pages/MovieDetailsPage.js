// import { render } from '@testing-library/react'
import React, { Component } from "react";
import FetchMovie from "../../ServiseApi/FetchMovie";

class MovieDetailisPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    FetchMovie.fetchMovieById().then((r) => this.setState({ movies: [...r] }));
  }

  render() {
    return <h2>Detallllllllllllll</h2>;
  }
}

export default MovieDetailisPage;
