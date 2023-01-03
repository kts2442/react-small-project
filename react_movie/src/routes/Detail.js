import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie([json.data.movie]);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movie.map((movie) => (
            <div key={movie.id}>
              <img src={movie.background_image} alt={movie.id} />
              <h2>{movie.title}</h2>
              <h3>Rating : {movie.rating}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
