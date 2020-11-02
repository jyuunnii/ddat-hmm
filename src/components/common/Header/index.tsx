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
    const pathname = props.location.pathname;
    switch(pathname){
      case "/":
        return(
          <header style={{backgroundColor:"#ffffff"}}>
            <Link to="/" id="home-link">
              <Logo pathname={pathname}/>
            </Link>
            <button className="menu-button">
              <MaterialIcon icon="menu" />
            </button>
          </header>
        );

      case "/signin":
        return(
          <header>
            <Link to="/" id="home-link">
              <Logo pathname={pathname}/>
            </Link>
            <button className="back-button" onClick={() => history.goBack()}>
              <MaterialIcon icon="keyboard_arrow_left"/>
            </button>
          </header>
        );

      case "/signup":
          return(
            <header>
              <Link to="/" id="home-link">
                <Logo pathname={pathname}/>
              </Link>
              <button className="back-button" onClick={() => history.goBack()}>
                <MaterialIcon icon="keyboard_arrow_left" />
              </button>
            </header>
          );

      case "/search":
        return(
          <header>
            <Logo pathname={pathname}/>
            <button className="back-button" onClick={() => history.goBack()}>
              <MaterialIcon icon="keyboard_arrow_left"/>
            </button>
          </header>
        );
      
      case "/profile":
        return(
          <header style={{backgroundColor:"transparent"}}>
            <Logo pathname={pathname}/>
            <button className="back-button" style={{color: "#ffffff", backgroundColor:"transparent"}} onClick={() => history.goBack()}>
              <MaterialIcon icon="keyboard_arrow_left" />
            </button>
          </header>
        );
    }
    return (
      <header style={{backgroundColor:"#ffffff"}}>
        <Link to="/" id="home-link">
          <Logo pathname={pathname}/>
        </Link>
      </header>
    );
}

export default Header;