import { Link, withRouter } from "react-router-dom";
import styles from "./styles.module.css";

const MovieList = ({ movies, location }) => {
  return movies.map(({ id, title }) => (
    <li key={id} className={styles.titleList}>
      {/* <link to={{pathname: `/movies/${id}`,
        state: {from: location,},
        }}
        > */}
      {title}
      {/* </link> */}
    </li>
  ));
};

export default MovieList;
