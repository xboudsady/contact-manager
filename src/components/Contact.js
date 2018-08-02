import React, { Component } from "react";
import PropTypes from "prop-types";

// This is a class component not functional component, we have to use 'this.props' instead of just props
class Contact extends Component {
    render(props) {
        const { name, email, phone } = this.props; // We can extract value out of props, so we don't need to pass in 'this.props' each time
        return (
            <div className="card card-body mb-3">
                <h4>{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
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
