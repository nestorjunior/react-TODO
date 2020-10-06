import React from 'react';

const Navbar = () => {
    return (
        <div className="uk-container">
            <div className="uk-navbar">
                <div className="uk-navbar-left">
                    <a href="#!" className="uk-navbar-item uk-logo">My TODO's</a>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#!">
                                <span uk-icon="icon: plus; ratio: 1.2"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;