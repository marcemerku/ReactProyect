import React from 'react'
import Search from "./Search"
import Logo from "../img/logo.png"

const Header = () => {
    return (
        <>
            
            <header>
                <div class="conteiner">
                    <div className="img_Logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <Search />
                
                </div>
            </header>
        </>
    )
}

export default Header;