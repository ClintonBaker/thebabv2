import React from 'react';
import { Link } from 'react-router';

import UserBox from './UserBox';
import './styles/Navbar.css';

const Navbar = props => {
  return (
    <nav
      styleName="Navbar"
      className={`Navbar-innerPage-${props.onInnerPage}`}
      e2e="Navbar"
    >
      <div styleName="logoBox">
        <Link to="/">
          <h3 styleName="logo" e2e="logo">
            thebab
          </h3>
        </Link>
      </div>
      <div styleName="linksBox">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/browse">
          <p>browse</p>
        </Link>
        <p>latest</p>
        <p>blog</p>
      </div>
      <UserBox
        isAuth={props.actions.isAuth}
        authenticated={props.authenticated}
        logout={props.actions.logout}
      />
    </nav>
  );
};

export default Navbar;
