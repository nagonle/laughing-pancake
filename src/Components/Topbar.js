import React from 'react';
import './Topbar.css';
import Searchbar from './Searchbar';
import logo from '../images/lider-logo.svg';

const Topbar = ({ searchData }) => {

    return (
        <div>
            <div className="heading">Bienvenido a Lider</div>
            <div className="topbar">
                <div className="navbar">
                    <div className="leftgroup">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="navmenu"></div>
                    </div>
                    <div className="mid">
                        <Searchbar searchData={searchData}/>
                    </div>
                    <div className="rightgroup">
                        <div className="shoppingcart"></div>
                        <div className="market"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
