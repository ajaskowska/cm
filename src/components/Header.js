import React from 'react';
import logo from "../assets/Logo.png"
import {Banner, Logo, BannerTxt} from "./styles/Header.style";


function Header() {
    return (
        <>
            <Banner>
                <Logo src={logo}/>
                <BannerTxt>Lorem ipsum <br/> dolor set ignify</BannerTxt>
            </Banner>
        </>

    );
}

export default Header;