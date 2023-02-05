import GenreList from './GenreList';
import Pagination from '../pagination/Pagination';

import './FilterList.css';

function FilterList() {
    return (
        <div className="filter-board">
            <h3 className="filter-board__title">
                <strong>Фильтры:</strong>
            </h3>
            <button className="filter-board__clear-button">
                Сбросить все фильтры
            </button>
            <p className="filter-board__sort-title">Сортитровать по:</p>
            <select className="filter-board__sort-list">
                <option>Популярные по убыванию</option>
                <option>Популярные по возрастанию</option>
                <option>По алфавиту</option>
            </select>
            <p className="filter-board__year-title">Год релиза:</p>
            <select className="filter-board__year-list">
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
            <GenreList />
            <Pagination />
        </div>
    );
}

export default FilterList;
