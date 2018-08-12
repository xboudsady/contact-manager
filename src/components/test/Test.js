import React, { Component } from "react";

class Test extends Component {
    state = {
        test: "",
        body: ""
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    title: data.title,
                    body: data.body
                })
            );
    }

    // componentWillMount() {
    //     console.log("componentWillMount...");
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate...");
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps...");
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         test: "something"
    //     };
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(" getSnapShotBeforeUpdate...");
    // }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default Test;
