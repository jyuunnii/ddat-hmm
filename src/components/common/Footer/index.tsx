import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './index.css';
import LoginContext from '../../../context';

interface FooterProps {
    location: {
      pathname: string;
    };
  }

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Footer = (props: FooterProps) => {
  const pathname = props.location.pathname;
  return(
    <LoginContext.Consumer>
      {loginUser => {
        if(loginUser === undefined){
          return(
            <footer>
            <Link to="/" style={{color: pathname=== "/"? "#9ED5E7":"#757575"}}>
              <IconWrapper><span className="material-icons footer-icon">home</span>Home</IconWrapper></Link>
            <Link to="/search" style={{color: pathname=== "/search"? "#9ED5E7":"#757575"}}>
              <IconWrapper><span className="material-icons footer-icon">search</span>Search</IconWrapper></Link>
            <Link to="/signin" style={{color: pathname=== "/profile"? "#9ED5E7":"#757575"}}>
              <IconWrapper><span className="material-icons footer-icon">person</span>Profile</IconWrapper></Link>
          </footer>
          );
        }
        if(loginUser.user.id > 0){
          return(
            <footer>
              <Link to={`/user/${loginUser.user.id}`} style={{color: pathname=== "/user"? "#9ED5E7":"#757575"}}>
                <IconWrapper><span className="material-icons footer-icon">home</span>Home</IconWrapper></Link>
              <Link to="/search" style={{color: pathname=== "/search"? "#9ED5E7":"#757575"}}>
                <IconWrapper><span className="material-icons footer-icon">search</span>Search</IconWrapper></Link>
              <Link to="/profile" style={{color: pathname=== "/profile"? "#9ED5E7":"#757575"}}>
                <IconWrapper><span className="material-icons footer-icon">person</span>Profile</IconWrapper></Link>
            </footer>
          )
        }else{
          return(
            <footer>
            <Link to="/" style={{color: pathname=== "/"? "#9ED5E7":"#757575"}}>
              <IconWrapper><span className="material-icons footer-icon">home</span>Home</IconWrapper></Link>
            <Link to="/search" style={{color: pathname=== "/search"? "#9ED5E7":"#757575"}}>
              <IconWrapper><span className="material-icons footer-icon">search</span>Search</IconWrapper></Link>
            <Link to="/signin" style={{color: pathname=== "/profile"? "#9ED5E7":"#757575"}}>
              <IconWrapper><span className="material-icons footer-icon">person</span>Profile</IconWrapper></Link>
          </footer>
          )
        }
      }}
    </LoginContext.Consumer>
  )
  
}

export default Footer;