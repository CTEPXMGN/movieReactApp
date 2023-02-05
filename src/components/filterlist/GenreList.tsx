import { nanoid } from 'nanoid';
import './GenreList.css';

function id() {
    return nanoid();
}

import { genres } from './variables.js';

function GenreList() {
    const listItems = genres.map((item) => {
        return (
            <li key={id()}>
                <label>
                    <input type="checkbox" />
                    {item}
                </label>
            </li>
        );
    });

    return <ul className="filter-board__jenre-list">{listItems}</ul>;
}

export default GenreList;
