import React from "react";
import "./navigation.css"

export default function Navigation (props) {
    console.log()
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">{props.name}</a></li>

                </ul>
            </nav>
        </header>
    )
}