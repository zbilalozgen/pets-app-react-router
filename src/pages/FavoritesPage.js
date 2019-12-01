import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class FavoritesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    axios.get(`https://5d9f63b24d823c0014dd30d1.mockapi.io/test`).then(res =>
      res.data.map(todo =>
        this.setState({
          favorites: todo
        })
      )
    );
  }

  render() {
    return <h1>In Development...</h1>;
  }
}
