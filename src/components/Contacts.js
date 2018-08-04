import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

// We use class base component because we want to use 'state'
class Contacts extends Component {
    // We can delete here from contact.js because we its passed to its parent component which has the state
    deleteContact = id => {
        // take the contact from the state via destructruing
        const { contacts } = this.state;

        // State is immutable, so we can't use setState(), so we use filter() instead
        // Create a new contacts, without the matching id of the parameter
        const newContacts = contacts.filter(contact => contact.id !== id);

        // Now we setState() with the new copy of the contacts without the one we don't want
        this.setState({
            contacts: newContacts
        });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    // destructuring contacts, assign to value
                    const { contacts } = value;
                    return (
                        // Fragments removes uncessary elements you don't need, here we take out the <div></div>
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                    // Props for Contact.js event handler from its child
                                    // Need to pass in .bind() to get the id of the item we're deleting
                                    deleteClickHandler={this.deleteContact.bind(
                                        this,
                                        contact.id
                                    )}
                                />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
