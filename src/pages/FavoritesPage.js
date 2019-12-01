import React, { Component } from "react";
import axios from "axios";

export default class FavoritesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://5dd7af92505c590014d3b4ac.mockapi.io/favorites`)
      .then(res =>
        res.data.map(pet => {
          console.log(pet.pet);
        })
      );
  }

  render() {
    return <div></div>;
  }
}
