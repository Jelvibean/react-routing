import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {

  const favoriteCtx = useContext(FavoritesContext);
  return (
     /* how you define your import is what you will use to call the classes within */
     /* Notice here classes.header */   
    <header className={classes.header}>
      <div className={classes.logo}>Reaact Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Meet Ups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites &nbsp;<span  className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
