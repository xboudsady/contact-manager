import React, { Component } from "react";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };

    onSubmit = e => {
        // preventDefault() we don't want to actually submit by default
        e.preventDefault();
        console.log(this.state);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        // Destructuring to extrat key in state object
        const { name, email, phone } = this.state;

        return (
            // Create the form in a card
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name..."
                                // Will not be able to type in input field, until there is an onChange() event, because initial state is immutable
                                value={name}
                                // Use onChange property to and object to pass the function to change state
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email..."
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone..."
                                value={phone}
                                onChange={this.onChange}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;
