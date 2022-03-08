import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        const {firstName, lastName, age, hairColor} = props;
        this.state = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            hairColor: hairColor
        }
    }

    birthday = () => {
        this.setState({ age: this.state.age +1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.lastName}, {this.state.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button type="buton" className="btn btn-primary" onClick={this.birthday}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;