import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// This is a functional component, we can just use 'props'
const Header = props => {
    // Using destructruing to having to pass in 'props' each time during the return
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">
                                <i className="fas fa-plus" /> Add
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <i className="fas fa-question" /> About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Typing checking our props
Header.defaultProps = {
    // Deafult value if branding props is missing
    branding: "My App"
};

Header.propTypes = {
    // Checkt if branding is a string, and required
    branding: PropTypes.string.isRequired
};

export default Header;
