import styles from "./styles.module.css";
import PropTypes from "prop-types";
const base_url = "https://image.tmdb.org/t/p/w300";

export default function MovieCard({
  movie: { poster_path, title, overview, genres, vote_average },
}) {
  return (
    <div className={styles.moviesBox}>
      <img src={base_url + poster_path} alt={title} />
      <div className={styles.infoBox}>
        <h1>{title}</h1>
        <span>User Score: {vote_average}</span>
        <h3>Overview</h3>
        <span>{overview}</span>
        <h3>Genres</h3>
        <ul className={styles.genre}>
          {genres &&
            genres.map((g) => (
              <li className={styles.genreLi} key={g.id}>
                {" "}
                {g.name}{" "}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
