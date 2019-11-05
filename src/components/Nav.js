import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav>
            <h2>Code Nation</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#">Basket {props.items}</a></li>
            </ul>
        </nav>
    )
}
