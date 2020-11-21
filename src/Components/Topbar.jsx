import React from 'react';
import './Topbar.css';
import Searchbar from './Searchbar';

const Topbar = ({ searchData }) => {

    return (
        <div>
            <div className="heading">Mensaje de cabecera</div>
            <div className="topbar">
                <div className="navbar">
                    <div className="leftgroup">
                        <div className="logo">LOGO</div>
                        <div className="navmenu">MENU</div>
                    </div>
                    <div className="mid">
                        <Searchbar searchData={searchData}/>
                    </div>
                    <div className="rightgroup">
                        <div className="shoppingcart">CART</div>
                        <div className="market">MARKET</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
