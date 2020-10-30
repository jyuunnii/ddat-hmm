import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../Logo';
import MaterialIcon from '../MaterialIcon';
import './index.css'

interface HeaderProps {
    location: {
      pathname: string;
    };
  }
  

const Header = (props: HeaderProps) => {
    const history = useHistory();
    return (
      <header>
        <Link to="/" id="home-link">
          <Logo />
        </Link>
        {props.location.pathname !== "/" && props.location.pathname !== "/login" && (
          <button className="back-button" onClick={() => history.goBack()}>
            <MaterialIcon icon="keyboard_arrow_left" />
          </button>
        )}
       {/* <button className="menu-button">
         <MaterialIcon icon="menu" />
       </button> */}
      </header>
    );
}

export default Header;