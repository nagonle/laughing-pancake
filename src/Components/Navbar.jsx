import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">LOGO</div>

                <div className="mid">
                    <div className="searchbar">
                        <form>
                            <div className="block-button">
                                <div className="search-icon">L</div>
                            </div>
                            <div className="block-search">
                                <input className="search" type="text"></input>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="menu">
                    <li>
                        <ul>Home</ul>
                        <ul>Blog</ul>
                        <ul>About Us</ul>
                    </li>
                </div>

            </div>

        </div>
    )
}

export default Navbar;
