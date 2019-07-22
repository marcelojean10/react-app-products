import React, { Component } from "react";
import api from "../../services/api";

import "./update.css";

export default class Update extends Component {
  state = {
    product: {},
    title: "",
    description: "",
    url: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({
      product: response.data
    });

    const { title, description, url } = this.state.product;

    this.setState({
      title,
      description,
      url
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { title, description, url } = this.state;

    await api
      .put(`/products/${id}`, {
        title,
        description,
        url
      })
      .then(response => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, description, url } = this.state;
    return (
      <form action="" id="new-product" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={this.handleChange}
          value={title}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.handleChange}
          value={description}
        />
        <input
          type="text"
          name="url"
          placeholder="Url"
          onChange={this.handleChange}
          value={url}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
