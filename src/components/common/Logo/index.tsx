import React from 'react';
import './index.css';

type LogoProps = {
   pathname: string;
}

const Logo = ({pathname}: LogoProps) => {
    let logo = "DDAT HMM";
    switch(pathname){
        case "/":
            logo = "DDAT HMM"
            break;

        case "/signin":
            logo = "DDAT HMM"
            break;

        case "/signup":
            logo = "DDAT HMM"
            break;

        case "/search":
            logo = "SEARCH"
            break;

        case "/profile":
            logo = "PROFILE"
            break;
    }

    return(
        <div className="logo" style={{color: pathname==="/profile"? "#ffffff":"#000000"}}>{logo}</div>
    )
}

export default Logo;