import { Component } from "react";
import MoviesList from "../MovieList";
import FetchMovie from "../../ServiseApi/FetchMovie";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    FetchMovie.fetchPopMovie().then((r) => this.setState({ movies: [...r] }));
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    return <MoviesList movies={movies} />;
  }
}

export default HomePage;
