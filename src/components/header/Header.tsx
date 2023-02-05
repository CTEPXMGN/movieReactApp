import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <a href="#" className="home-button">
                    Home
                </a>
                <button className="login-button">Login</button>
            </div>
        </header>
    );
}

export default Header;
