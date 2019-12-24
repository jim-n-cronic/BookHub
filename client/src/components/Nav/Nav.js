import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    
    return(
        <nav className="navbar expand-lg navbar-dark bg-dark mb-3 sticky-top">
            <div className="container">
                <NavLink 
                    exact to="/" 
                    className="navbar-brand">
                    <i className="fas fa-book-open"></i> BookHub </NavLink>
                <NavLink 
                    exact to='/saved' 
                    className='navbar-brand'>Saved Books</NavLink>
            </div>
        </nav>
    )
}
export default NavBar