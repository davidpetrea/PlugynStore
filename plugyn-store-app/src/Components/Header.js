import React from "react";
import "./Header.css";

function Header(){

    return(
        <div className="container">
            <header>
                {/* <div className="header-game">
                    
                </div> */}
                <span className="header-game-text">Choose your game</span>
                <img className="logo" src=".\Images\plugynLogo.png"/>
           
            </header>
        </div>
        
    )
}



export default Header;