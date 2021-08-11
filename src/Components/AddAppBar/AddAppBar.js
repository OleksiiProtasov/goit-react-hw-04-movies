import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function AddAppBar({ movieId }) {
  return (
    <ul>
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
    </ul>
  );
}

AddAppBar.propTypes = {
  movieId: PropTypes.string.isRequired,
};
