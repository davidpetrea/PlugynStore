import React from "react"

function Header(){
    return(
        <div className="container my-header">
            <div className="row">
               <div className="col-md-4 gamelist">
                    <p className="gamelist-text">Choose your game</p>
                    <img className="gamelist-arrow" src="./images/arrow.png"/>
               </div>
               
               
                <div className="col-8 col-sm-8 col-md-4">
                    <a href="index.html"><img className="logo" src="./images/plugynLogo.png"/></a>
                </div>

                <div className="col-4 col-sm-4 col-md-4">
                    <div className="loginBox">
                        <button className="login-button">LOGIN</button>
                        <span className="or-span">or</span>
                        <button className="signup-button">SIGN UP</button>
                    </div>
                    
                    <img className="menu" src="./images/arrow.png"/>
                </div>
                

            </div>
        </div>

    )
}

export default Header