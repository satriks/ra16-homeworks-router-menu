import { NavLink } from "react-router-dom";

const active = ({ isActive }: any): string =>
  isActive ? "menu__item menu__item-active" : "menu__item";

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink className={active} to="/">
        Главная
      </NavLink>
      <NavLink className={active} to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className={active} to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className={active} to="/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
}
