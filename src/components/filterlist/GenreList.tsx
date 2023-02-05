// import { nanoid } from 'nanoid';
import './GenreList.css';

// function id() {
//     return nanoid();
// }

import { GENRES } from '../variables.js';

function GenreList() {
    const listItems = GENRES.map((item) => {
        return (
            <li key={item.id}>
                <label>
                    <input type="checkbox" />
                    {item.name}
                </label>
            </li>
        );
    });

    return <ul className="filter-board__jenre-list">{listItems}</ul>;
}

export default GenreList;
