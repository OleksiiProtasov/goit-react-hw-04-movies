import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchMovie from "../../ServiseApi/FetchMovie";

export default function Reviews() {
  const { MovieDetailsPageById } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    FetchMovie.fetchMovieReviewById(MovieDetailsPageById)
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.warn(error));
  }, [MovieDetailsPageById]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}
