import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager1" />
                <Contact
                    name="John Doe"
                    email="jdoe@gmail.com"
                    phone="555-555-555"
                />
                <Contact
                    name="Karen Smith"
                    email="karen@gmail.com"
                    phone="333-333-3333"
                />
            </div>
        );
    }
}

export default App;
