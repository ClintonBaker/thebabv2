import React from 'react';
import { Link } from 'react-router';

import './styles/UserBox.css';

const UserBox = props => {
  props.isAuth();
  return (
    <div styleName="UserBox" e2e={props.e2e || 'UserBox'}>
      {console.log('UserBox is rendering')}
      <Choose>
        <When condition={props.authenticated}>
          <a onClick={props.logout}>
            <p>Log Out</p>
          </a>
        </When>
        <Otherwise>
          <Link to="/login">
            <small>Log In</small>
          </Link>
          <Link to="/signup">
            <small>Sign Up</small>
          </Link>
        </Otherwise>
      </Choose>
    </div>
  );
};

export default UserBox;
