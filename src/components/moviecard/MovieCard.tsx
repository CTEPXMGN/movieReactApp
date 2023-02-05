import './MovieCard.css';

const moviesData = [
    {
        name: 'Истребитель демонов: Поезд "Бесконечный"',
        rating: '8.4',
        imgsrc: '../../../public/img/1.png',
    },
    {
        name: 'Леди Баг и Супер-Кот: Нью-Йорк. Союз героев',
        rating: '8.2',
        imgsrc: '../../../public/img/2.png',
    },
    {
        name: 'Детстроук: Рыцари и Драконы',
        rating: '6.9',
        imgsrc: '../../../public/img/3.png',
    },
    {
        name: 'Соник в кино',
        rating: '7.4',
        imgsrc: '../../../public/img/4.png',
    },
    {
        name: 'Семейка Крудс: Новоселье',
        rating: '7.6',
        imgsrc: '../../../public/img/5.png',
    },
    {
        name: 'Губка Боб в бегах',
        rating: '7.6',
        imgsrc: '../../../public/img/6.png',
    },
];

function MovieCard() {
    const movieCards = moviesData.map((item, index) => {
        return (
            <div className="movie-card" key={index}>
                <img src={item.imgsrc} alt="card-img" className="card-img" />
                <div className="card-info">
                    <div className="card-info__head">
                        <p className="card-info__rating">
                            Рейтинг: <span>{item.rating}</span>
                        </p>
                        <img
                            src="../../../public/img/star.svg"
                            alt="movie-star"
                            className="movie-favorite"
                        />
                        <img
                            src="../../../public/img/bookmark.svg"
                            alt="movie-bookmark"
                            className="movie-bookmark"
                        />
                    </div>
                    <div className="movie-name">{item.name}</div>
                    <div className="movie__button-details">Подробнее</div>
                </div>
            </div>
        );
    });
    return <>{movieCards}</>;
}

export default MovieCard;
