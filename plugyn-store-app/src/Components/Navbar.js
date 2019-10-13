import React from "react"
import NavItem from "./Nav_Item"

function Navbar(){
    return(
        <div className="container my-navbar">
            <div className="row">
                <NavItem name="HOME" link="index.html"/>
                <NavItem name="ABOUT US" link="about.html"/>
                <NavItem name="STORE" link="store.html"/>
                <NavItem name="CONTACT" link="contact.html"/>
                <NavItem name="BOOSTERS" link="boosters.html"/>
                <NavItem name="TERMS" link="terms.html"/>
            </div>
        </div>
    )
}

export default Navbar