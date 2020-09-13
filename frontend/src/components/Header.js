import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/styles.css"
const Header = () => {
    return (
        <header>
            <NavLink to="/"> <h2>SCAPE</h2></NavLink>
            <nav className="d-flex">
                <NavLink to="/news">News</NavLink>
                <NavLink to="/games">Games</NavLink>

                <div class="dropdown show " >
                    <a class="btn btn-secondary dropdown-toggle-left " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        pic</a>

                    <div class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                        <div class=" d-flex flex-column">
                            <NavLink to="/signup">Sign Up</NavLink>
                            <NavLink to="/login">Log in</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header