import React from "react";

// This is a functional component, we can just use 'props'
const Header = props => {
    const { branding } = props; // Using destructruing to having to pass in 'props' each time during the return
    return (
        <div>
            <h1>{branding}</h1>
        </div>
    );
};

export default Header;
