import React from 'react';
import {Link} from "react-router-dom";

const BottomNavigation = ({state, setNavigation}) => (
    <div className = "app-nav-container-bottom">
        <nav className="app-nav">
            <Link to = '/'
                className = {state === 0 ? "app-nav-selected-item" : "app-nav-bottom-item"} 
                onClick = {()=>setNavigation(0)}
            >
                <span className="icon">
                    <i className="fas fa-home"></i>
                </span>
                <p>Home</p>
            </Link>
            <Link to = '/orders'
                className = {state === 1 ? "app-nav-selected-item" : "app-nav-bottom-item"}
                onClick = {()=>setNavigation(1)}    
            >
                <span className="icon">
                    <i className="fas fa-shopping-cart"></i>
                </span>
                <p>Pesanan</p>
            </Link>
            <Link to = '/profile'
                className = {state === 2 ? "app-nav-selected-item" : "app-nav-bottom-item"}
                onClick = {()=>setNavigation(2)}
            >
                <span className="icon">
                    <i className="fas fa-user-circle"></i>
                </span>
                <p>Profil</p>
            </Link>
        </nav>
    </div>
)

export default BottomNavigation;