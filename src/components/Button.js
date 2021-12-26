import React, { Component } from "react";

export class Button extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div>
        <button
          id="click"
          onClick={() => {
            this.setState({ visible: true });
          }}
        >
          Click
        </button>
        {this.state.visible ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default Button;
