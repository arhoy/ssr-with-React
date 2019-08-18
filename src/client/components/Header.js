import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log('current user is', auth);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo right" to="/">
          {' '}
          REACT SSR{' '}
        </Link>
        <ul id="nav-mobile" className="right hide-on med-and-down">
          <li>
            <Link to="/users"> Users </Link>
          </li>
          <li>
            {' '}
            <Link to="/admins"> Admins </Link>
          </li>
          <li>
            {auth ? (
              <a href="/api/logout"> Logout </a>
            ) : (
              <a href="/api/auth/google"> Login </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
