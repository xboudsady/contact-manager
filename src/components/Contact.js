import React, { Component } from "react";
import PropTypes from "prop-types";

// This is a class component not functional component, we have to use 'this.props' instead of just props
class Contact extends Component {
    // Addign state here during onShowClick() event
    state = {
        // If click, show info
        showContactInfo: false
    };

    // Adde this function for deleting the properties
    onDeleteClick = () => {
        this.props.deleteClickHandler();
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
                        style={{ cursor: "pointer" }}
                    />
                    <i
                        className="fas fa-times"
                        style={{
                            cursor: "pointer",
                            float: "right",
                            color: "red"
                        }}
                        // Add event listern to delete when icon is click
                        onClick={this.onDeleteClick}
                    />
                </h4>
                {showContactInfo ? ( // If this is true; show the content, if 'null' then hide
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
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
