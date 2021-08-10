// eslint-disable-next-line
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./styles.module.css";

const MovieList = ({ movies, location }) => {
  // const match = useRouteMatch();
  // console.log(match)
  // console.log(movies)
  return movies.map(({ id, title, vote_average }) => (
    <li key={id} className={styles.titleList}>
      <Link to={`/movies/${id}#${title}`}>{title}</Link>
    </li>
  ));
};
// eslint-disable-next-line
{
  /* { pathname: `/movies/${id}`, hash:`${title}`, state: { from: location } } */
}
export default MovieList;
