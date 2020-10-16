import React from 'react';
import './index.css';

interface FooterProps {
    location: {
      pathname: string;
    };
  }

const Footer = (props: FooterProps) => {
    return(
        <footer>footer</footer>
    )
}

export default Footer;