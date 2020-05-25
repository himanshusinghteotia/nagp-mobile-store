import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    handleClick = () => {
        window.location.href = '/';
    }

    render() {
        const isUserLoggedIn = this.props.isLoggedIn
        let loginLogoutButton
        if (!isUserLoggedIn) {
            loginLogoutButton = <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart fa-2x"></i></Link>
                </li>
            </ul>
        }
        else {
            loginLogoutButton = loginLogoutButton = <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/cart" className="nav-link"><i className="fa fa-user fa-2x"></i></Link>
                </li>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Welcome {this.props.user.name}
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li onClick={() => { this.handleClick() }} className="text-center">logout</li>
                    </ul>
                </div>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart fa-2x"></i></Link>
                </li>
            </ul>
        }
        return (
            <nav className="navbar navbar-inverse navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NAGP 2020</Link>
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarsExample03"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        {loginLogoutButton}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        user: state.loginReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);