import React, { Component } from "react";
import axios from "axios";

export default class PetDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pet: []
    };
  }
  componentDidMount() {
    const params = this.props.match.params;

    axios
      .get(`http://5dd7af92505c590014d3b4ac.mockapi.io/pets/${params.id}`)
      .then(({ data: petData }) => {
        this.setState({ pet: petData });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className="pet-img mt-5" src={this.state.pet.image} />
          </div>
          <div className="col-6  m-auto">
            <h1 className="pet-name">{this.state.pet.name}</h1>
            <h3
              className="badge badge-info pet-breed"
              style={{ fontSize: "12px" }}
            >
              {this.state.pet.breed}
            </h3>
            <p className="pet-desc">{this.state.pet.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
