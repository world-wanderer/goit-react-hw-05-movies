import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        end
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        to="/"
        className={css.link}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? '#fff' : 'inherit' })}
        to="/movies"
        className={css.link}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
