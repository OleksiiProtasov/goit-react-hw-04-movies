import { useState, useEffect, lazy, Suspense, useRef } from "react";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  Switch,
  useParams,
  Route,
} from "react-router-dom";

import styles from "./styles.module.css";
import FetchMovie from "../../ServiseApi/FetchMovie";

const Reviews = lazy(() => import("./Reviews"));
const Cast = lazy(() => import("./Cast"));
const MovieCard = lazy(() => import("../../Components/MovieCard"));
const AddAppBar = lazy(() => import("../../Components/AddAppBar"));

export default function MovieDetailisPage() {
  const { MovieDetailsPageById } = useParams();
  const [movie, setMovies] = useState(null);
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { current } = useRef(location.state);

  useEffect(() => {
    FetchMovie.fetchMovieById(MovieDetailsPageById)
      .then((d) => {
        setMovies(d);
      })
      .catch((error) => {
        history.push("/");
        console.warn(error);
      });
  }, [MovieDetailsPageById, history]);

  const goBackBtn = () => {
    history.push(current ? current.from : "/");
  };

  return (
    <>
      <div>
        <button onClick={goBackBtn} className={styles.Btn}>
          Go back
        </button>
        {movie && (
          <>
            <Suspense fallback={<h2>Loading...</h2>}>
              <MovieCard movie={movie} />
              <hr />
              <p>More informations</p>
              <AddAppBar movieId={MovieDetailsPageById} />
              <hr />
            </Suspense>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Switch>
                <Route path={`${path}/cast`}>
                  <Cast />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews />
                </Route>
              </Switch>
            </Suspense>
          </>
        )}
      </div>
    </>
  );
}
