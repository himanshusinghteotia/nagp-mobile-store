import React from 'react';
import nagarro from '../images/nagarro.jpg'

const Footer = () => {
    return (
        <div>
            <nav className="navbar-dark bg-primary fixed-bottom">
                <div className="container">
                    <center><p>Made by Himanshu Singh Teotia &copy;2020&nbsp;&nbsp;&nbsp;&nbsp;<img src={nagarro} alt="nagarro" /></p></center>
                </div>
            </nav>
        </div>
    )
}

export default Footer;