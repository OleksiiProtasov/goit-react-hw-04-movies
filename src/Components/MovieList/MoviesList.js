// eslint-disable-next-line
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const MovieList = ({ movies }) => {
  return movies.map(({ id, title }) => (
    <li key={id} className={styles.titleList}>
      <Link to={`/movies/${id}#${title}`}>{title}</Link>
    </li>
  ));
};

export default MovieList;
