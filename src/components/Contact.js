import React, { Component } from "react";
import PropTypes from "prop-types";

// This is a class component not functional component, we have to use 'this.props' instead of just props
class Contact extends Component {
    render(props) {
        const { name, email, phone } = this.props; // We can extract value out of props, so we don't need to pass in 'this.props' each time
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact;
