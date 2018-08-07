import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        // Create an error object to catch and send message of error
        errors: {}
    };

    onSubmit = (dispatch, e) => {
        // preventDefault() we don't want to actually submit by default
        e.preventDefault();

        const { name, email, phone } = this.state;

        // Check for Errors
        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }

        if (email === "") {
            this.setState({ errors: { email: "Email is required" } });
            return;
        }

        if (phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }

        // Construct a new contact object
        const newContact = {
            // uuid npm package to generate unique key
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: "ADD_CONTACT", payload: newContact });

        // Clear State
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        // Destructuring to extrat key in state object
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onSubmit.bind(
                                        this,
                                        dispatch
                                    )}
                                >
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />

                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
