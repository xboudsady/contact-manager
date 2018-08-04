import React, { Component } from "react";

// .createContext for our global state management rather than each individual compoents
const Context = React.createContext();

export class Provider extends Component {
    // this is where we have our global state
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen Williams",
                email: "karen@gmail.com",
                phone: "222-222-2222"
            },
            {
                id: 3,
                name: "Henry Johnson",
                email: "henry@gmail.com",
                phone: "111-111-1111"
            }
        ]
    };

    render() {
        // We pass in the entire state so we can use it anywhere in our app
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

// We then export a 'consumer', because we have a 'provider' so consumer can access state
export const Consumer = Context.Consumer;
