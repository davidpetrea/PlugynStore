import React from "react"

function NavItem(props){


    return(
        <div className="col-md-2">
            <a href={props.link}><div>{props.name}</div></a> 
        </div>

    )
}

export default NavItem