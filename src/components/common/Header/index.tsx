import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginContext from '../../../context';
import { initialUser } from '../../../utils/Const';
import { UserPublic } from '../../../utils/Type';
import { getUserPublicById } from '../../api';
import ProfileHeaderMenu from '../../Components/ProfileHeaderMenu';
import Logo from '../Logo';
import MaterialIcon from '../MaterialIcon';
import './index.css'

interface HeaderProps {
    location: {
      pathname: string;
    };
    token: {id: number, token:string};
  }
  

const Header = (props: HeaderProps) => {
    const history = useHistory();
    const pathname = props.location.pathname;
    const [move, setMove] = useState<boolean>(false);
    const [user, setUser] = useState<UserPublic>(initialUser);
  
    const showProfileMenu = (move: boolean) => {
      if(move){
          setMove(false);
      }else{
          setMove(true);
      }
    }

    useEffect(()=>{
      let mounted = true;
      async function fetchData(){
        if(props.token.id > 0){
          await getUserPublicById(props.token.id, props.token.token)
          .then(data => {
            if(mounted){
              setUser(data)
            }
          })
        }
      }
      fetchData();
      return (() => {mounted = false});
    },[props.token.id, props.token.token])

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

      case `/user/${user.id}`:
        return(
          <LoginContext.Consumer>
            {token => {
              if(token.userToken.id > 0){
                return(
                  <header style={{backgroundColor:"#ffffff"}}>
                    <Link to={`/user/${user.id}`} id="home-link">
                      <Logo pathname={pathname}/>
                    </Link>
                    <Link to="/profile">
                    <button className="header-profile">{user.name.charAt(0).toUpperCase()}</button>
                    </Link>
                  </header>
                  );
              }else{
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
              }
            }}
          </LoginContext.Consumer>
        
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