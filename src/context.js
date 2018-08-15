import React, { Component } from "react";
import axios from "axios";

// .createContext for our global state management rather than each individual compoents
const Context = React.createContext();

// 'action' will be an object, and it will be a type; so that type we want to be evaluated
// reducer to evaluate the action type
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                // take the existing state, using spread operatior
                ...state, // filter out the contact that needs to be filtered out
                contacts: state.contacts.filter(
                    (
                        contact // payload is just some data we want to send along with our action, sending 'id' as the payload
                    ) => contact.id !== action.payload
                )
            };
        case "ADD_CONTACT":
            return {
                // take the existing state, using spread operatior
                ...state, // filter out the contact that needs to be filtered out
                // Take 'contacts' which is the array of o
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    // this is where we have our global state
    state = {
        contacts: [],
        // When we have a consumer, it consume their entire state because that's what we're passing in.
        // We should be able to access 'dispatch' anywhere
        dispatch: action => this.setState(state => reducer(state, action))
    };

    async componentDidMount() {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        this.setState({ contacts: res.data });
    }

    render() {
        // We pass in the entire state so we can use it anywhere in our app, including props and functions
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

// We then export a 'consumer', because we have a 'provider' so consumer can access state
export const Consumer = Context.Consumer;
