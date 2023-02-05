import './MovieCard.css';
import {
    MOVIES_DATA,
    PAGES_INDEX,
    IMG_FAVORITE,
    IMG_BOOKMARK,
} from '../variables.js';

function MovieCard() {
    const moviesData = MOVIES_DATA.slice(
        PAGES_INDEX.firstIndex,
        PAGES_INDEX.lastIndex
    );

    const movieCards = moviesData.map((item, index) => {
        return (
            <div className="movie-card" key={index}>
                <img
                    src={item.poster_path}
                    alt="card-img"
                    className="card-img"
                />
                <div className="card-info">
                    <div className="card-info__head">
                        <p className="card-info__rating">
                            Рейтинг: <span>{item.vote_average}</span>
                        </p>
                        <img
                            src={IMG_FAVORITE}
                            alt="movie-star"
                            className="movie-favorite"
                        />
                        <img
                            src={IMG_BOOKMARK}
                            alt="movie-bookmark"
                            className="movie-bookmark"
                        />
                    </div>
                    <div className="movie-name">{item.title}</div>
                    <div className="movie__button-details">Подробнее</div>
                </div>
            </div>
        );
    });
    return <>{movieCards}</>;
}

export default MovieCard;
