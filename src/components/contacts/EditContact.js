import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        // Create an error object to catch and send message of error
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onSubmit = async (dispatch, e) => {
        // preventDefault() we don't want to actually submit by default
        e.preventDefault();

        const { name, email, phone } = this.state;

        // Check for Errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }
        

        const updContact = {
            name,
            email,
            phone
        }

        // We want to pull the id out of the url e.g. localhost:3000/contact/edit/1
        const { id } = this.props.match.params;

        // Use await because of the async, then send our updContact payload
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        // Use the dispatch method to update contact, and pass in the payload.data above
        dispatch({type:'UPDATE_CONTACT', payload: res.data});
        
        // Clear State
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });

        this.props.history.push("/");
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
                            <div className="card-header">Edit Contact</div>
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
                                        value="Edit Contact"
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
