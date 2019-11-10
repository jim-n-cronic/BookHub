import React from 'react';

const NavBar = () => {
    return(
        <div className="container">
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                microBoss >>
                </a>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <a className="nav-link" href="/">ToREAD List</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link" href="/savedbooks">Create ToREAD</a>
                    </li>
                </ul>
                </div>
                </nav>
        </div>
    )
}

export default NavBar;