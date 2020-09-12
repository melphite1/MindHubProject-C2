import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/styles.css"
const Header = () => {
    return (
        <header>
            <NavLink to="/"> <h2>CRIS</h2></NavLink>
            <nav>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/games">Games</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log in</NavLink>
            </nav>
        </header>
    )
}

export default Header