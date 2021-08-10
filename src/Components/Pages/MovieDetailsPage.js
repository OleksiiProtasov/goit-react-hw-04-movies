// import { render } from '@testing-library/react'
import { useState, useEffect } from "react";
// eslint-disable-next-line
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

import FetchMovie from "../../ServiseApi/FetchMovie";

const base_url = "https://image.tmdb.org/t/p/w300";

// class MovieDetailisPage extends Component {
//   state = {
//     movies: [],
//   };

//   async componentDidMount() {
//     FetchMovie.fetchMovieById().then((r) => this.setState({ movies: [...r] }));
//   }

//   render() {
//     return <h2>MovieDetailisPage</h2>;
//   }
// }

// export default MovieDetailisPage;

export default function MovieDetailisPage() {
  const { MovieDetailsPageById } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    FetchMovie.fetchMovieById(MovieDetailsPageById).then(setMovies);
  }, [MovieDetailsPageById]);
  console.log(movie);

  return (
    <>
      {movie && (
        <div className={styles.moviesBox}>
          <img src={base_url + movie.poster_path} alt={movie.title} />
          <div className={styles.infoBox}>
            <h1>{movie.title}</h1>
            <span>User Score: {movie.vote_average}</span>
            <h3>Overview</h3>
            <span>{movie.overview}</span>
            <h3>Genres</h3>
            <ul className={styles.genre}>
              {movie.genres &&
                movie.genres.map((g) => (
                  <li className={styles.genreLi} key={g.id}>
                    {" "}
                    {g.name}{" "}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
