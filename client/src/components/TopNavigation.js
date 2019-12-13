import React from 'react';

const TopNavigation = ({logo}) => (
    <div className = "app-nav-container-top">
        <nav className="navbar app-nav">
            <a  href="https://bulma.io" className="app-logo">
                <img src={logo}/>
            </a>
            <p className="app-title">
                DandiyStudio
            </p>
            <p className="app-title-sm">
                Dandiy<br/>Studio
            </p>
            <div className="app-nav-top-item-right">
                <a className="button is-light">
                    Masuk
                </a>
            </div>
            <div className="app-nav-top-item-right">
                <a className="button is-primary">
                    <strong>Daftar</strong>
                </a>
            </div>
        </nav>
    </div>
)

export default TopNavigation;