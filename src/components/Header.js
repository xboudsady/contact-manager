import React from "react";
import PropTypes from "prop-types";

// This is a functional component, we can just use 'props'
const Header = props => {
    // Using destructruing to having to pass in 'props' each time during the return
    const { branding } = props;
    return (
        <div>
            <h1>{branding}</h1>
        </div>
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
