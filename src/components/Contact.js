import React, { Component } from "react";
import PropTypes from "prop-types";

// This is a class component not functional component, we have to use 'this.props' instead of just props
class Contact extends Component {
    // Addign state here during onShowClick() event
    state = {
        // If click, show info
        showContactInfo: false
    };

    render() {
        const { name, email, phone } = this.props.contact; // We can extract value out of props, so we don't need to pass in 'this.props' each time
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{" "}
                    <i
                        onClick={() =>
                            this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })
                        }
                        className="fas fa-sort-down"
                    />
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
