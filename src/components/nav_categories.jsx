import React from "react";
import { Link } from "react-router-dom";

let NavCategory = () => {
    return (
        <nav className="navCategory">
            <Link to="/news/category/city">Город</Link>
            <Link to="/news/category/incidents">Проишествия</Link>
            <Link to="/news/category/politics">Политика</Link>
            <Link to="/news/category/style-and-beauty">Стиль и красота</Link>
            <Link to="/news/category/health">Здоровье</Link>
            <Link to="/news/category/culture">Культура</Link>
            <Link to="/news/category/science">Наука</Link>
            <Link to="/news">Все новости</Link>
        </nav>
    )
}

export default NavCategory;