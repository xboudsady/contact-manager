import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

// We use class base component because we want to use 'state'
class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    // destructuring contacts, assign to value
                    const { contacts } = value;
                    return (
                        // Fragments removes uncessary elements you don't need, here we take out the <div></div>
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-danger">Contact</span>{" "}
                                List
                            </h1>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
