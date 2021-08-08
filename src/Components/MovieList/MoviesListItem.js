import React from "react";
import styles from "./styles.module.css";

const MovieListItem = ({ title }) => (
  <li className={styles.movieList}>
    <p>{title}</p>
  </li>
);

export default MovieListItem;
