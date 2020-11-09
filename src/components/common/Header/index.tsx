import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserPublic } from '../../../utils';
import ProfileHeaderMenu from '../../Components/ProfileHeaderMenu';
import Logo from '../Logo';
import MaterialIcon from '../MaterialIcon';
import './index.css'

interface HeaderProps {
    location: {
      pathname: string;
    };
    user: UserPublic;
  }
  

const Header = (props: HeaderProps) => {
    const history = useHistory();
    const pathname = props.location.pathname;
    const [move, setMove] = useState<boolean>(false);
    
    const showProfileMenu = (move: boolean) => {
      if(move){
          setMove(false);
      }else{
          setMove(true);
      }
  }
    switch(pathname){
      case "/":
        return(
          <header style={{backgroundColor:"#ffffff"}}>
            <Link to="/" id="home-link">
              <Logo pathname={pathname}/>
            </Link>
            <Link to="/signin">
              <button className="start-button">
              <span>start!</span>
              </button>
            </Link>
          </header> 
        );

      case "/user":
        return(
          <header style={{backgroundColor:"#ffffff"}}>
          <Link to="/" id="home-link">
            <Logo pathname={pathname}/>
          </Link>
          <Link to="/profile">
          <button className="header-profile">{props.user.name.charAt(0).toUpperCase()}</button>
          </Link>
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
          <div>    
            <header style={{backgroundColor:"transparent"}}>
            <Logo pathname={pathname}/>
            <button className="back-button" style={{color: "#ffffff", backgroundColor:"transparent"}} onClick={() => history.goBack()}>
              <MaterialIcon icon="keyboard_arrow_left" />
            </button>
            <button className="profile-menu" onClick={()=>showProfileMenu(move)}>
              <span className="material-icons">more_horiz</span>
            </button>  
            </header>        
            <div className="profile-menu-box" style={{right: move? "0px" : "-160px"}}><ProfileHeaderMenu/></div>
          </div>
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