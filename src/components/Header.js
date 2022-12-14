
import React from "react";
import "./Header.css"

export default function Header (props) {


    return (
        <li>
            <a className="header-list" href="#">{props.name}</a>
        </li>
        
    )
}