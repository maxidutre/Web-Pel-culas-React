// import movie from "./movies.json"
import styles from "./MovieDetails.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import { Spinner } from "../../components/Spinner/Spinner";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!movie) { 
        return null;
    }

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <div className={styles.detailsContainer}>
            <img 
            className={`${styles.col} ${styles.movieImage}`} 
            src={imageUrl} 
            alt={movie.title} 
            />
            <div className={`${styles.col} ${styles.MovieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                    <strong>Genres:</strong> {" "}
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    ); 
}