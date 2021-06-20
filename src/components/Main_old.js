import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>{newTask}</h1>

        <form action="#">
          <input onChange={this.changeInput} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
