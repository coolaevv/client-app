import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
          <div className="header-body">
              <div className="logotype"><Link to="/">Logotype</Link></div>
              <nav>
                  <Link to="/news">Новости</Link>
                  <Link to="/video">Видео</Link>
                  <Link to="/city">Город</Link>
                  <Link to="/poster">Афиша</Link>
              </nav>
          </div>
      </header>
    </>
  );
}

export default Header;
