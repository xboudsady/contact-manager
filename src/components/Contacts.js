import React, { Component } from "react";
import Contact from "./Contact";

// We use class base component because we want to use 'state'
class Contacts extends Component {
    // our state
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
        // destructuring our state
        const { contacts } = this.state;

        return (
            // Fragments removes uncessary elements you don't need, here we take out the <div></div>
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;
