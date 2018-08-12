import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

// This is a class component not functional component, we have to use 'this.props' instead of just props
class Contact extends Component {
    // Addign state here during onShowClick() event
    state = {
        // If click, show info
        showContactInfo: false
    };

    // Add this function for deleting the properties
    onDeleteClick = (id, dispatch) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
        // takes in an action, which is a type
    };

    render() {
        const { id, name, email, phone } = this.props.contact; // We can extract value out of props, so we don't need to pass in 'this.props' each time
        const { showContactInfo } = this.state;

        return (
            // You need a Consumer to access the stuff from context.js
            <Consumer>
                {value => {
                    // Pulling out dispatch() from the state
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                <i
                                    onClick={() =>
                                        this.setState({
                                            showContactInfo: !this.state
                                                .showContactInfo
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
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                />
                            </h4>
                            {showContactInfo ? ( // If this is true; show the content, if 'null' then hide
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
