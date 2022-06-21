import { NavLink } from "react-router-dom";

let NavCategory = () => {
    return (
        <nav className="navCategory">
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/city">Город</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/incidents">Проишествия</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/politics">Политика</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/business">Бизнес</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/style-and-beauty">Стиль и красота</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/health">Здоровье</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/culture">Культура</NavLink>
            <NavLink className={(tab) => (tab.isActive ? 'active-tab' : 'nav-cat-tab')} to="/news/category/science">Наука</NavLink>
            <NavLink className="nav-cat-tab" to="/news">Все новости</NavLink>
        </nav>
    )
}

export default NavCategory;