import React from 'react';
import { FaClock } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Header = () => {
    return (
        <header>
            <div className="header">

                <div className="img-container">
                    <img src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png" alt="Le Cafe" />
                </div>
                <div className="width-header">
                    <div className="header-main container-logo">
                        <div className="logo-img my-1">
                            <img src="./img/khadeeja-yasser-3U9L9Chc3is-unsplash.jpg" alt="" />
                        </div>
                        <div className="logo-info">
                            <h1>Le Cafe</h1>
                            <h5><GoLocation /> 78 Sazz Street, India</h5>
                            <div className="flex">
                                <p className='open'>OPEN</p>
                                <span className='timing-clock'><FaClock /> Time: 9:00AM - 10:00PM</span>
                            </div>

                        </div>
                    </div>

                    <div className="timing">
                        <p><FaClock /> Time: 9:00AM - 10:00PM</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;