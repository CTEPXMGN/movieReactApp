import './Pagination.css';

function Pagination() {
    return (
        <div className="pagination-wrapper">
            <div className="pagination_button-wrapper">
                <button className="pagination-button_prev">Назад</button>
                <button className="pagination-button_next">Вперёд</button>
            </div>
            <p className="pagination__pages">1 из 1455</p>
        </div>
    );
}

export default Pagination;
