import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchMovie from "../../ServiseApi/FetchMovie";
import notFoundFoto from "../../img/notFoundPhoto.jpg";
import styles from "./styles.module.css";

export default function Cast() {
  let { MovieDetailsPageById } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    FetchMovie.fetchMovieCastById(MovieDetailsPageById)
      .then((data) => {
        setActors(data);
      })
      .catch((error) => console.warn(error));
  }, [MovieDetailsPageById]);

  return (
    <div>
      {actors && (
        <ul className={styles.AcrotsList}>
          {actors.map((actor) => (
            <li className={styles.ActorsItem} key={actor.id}>
              <img
                src={`${
                  actor.profile_path
                    ? "http://image.tmdb.org/t/p/original" + actor.profile_path
                    : notFoundFoto
                }`}
                width="200px"
                alt={actor.name}
              />
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
