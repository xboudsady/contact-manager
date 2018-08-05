import React, { Component } from "react";

// .createContext for our global state management rather than each individual compoents
const Context = React.createContext();

// 'action' will be an object, and it will be a type; so that type we want to be evaluated
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                // take the existing state, using spread operatior
                ...state,
                // filter out the contact that needs to be filtered out
                contacts: state.contacts.filter(
                    contact =>
                        // payload is just some data we want to send along with our action, sending 'id' as the payload
                        contact.id !== action.payload
                )
            };
        default:
            return state;
    }
};

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
        ],
        // When we have a consumer, it consume their entire state because that's what we're passing in.
        // We should be able to access 'dispatch' anywhere
        dispatch: action => this.setState(state => reducer(state, action))
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
