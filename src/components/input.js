import React, { Component } from "react"
import "./input.css"

export default class Input extends Component {
  render() {
    return (
      <span className="input input--kuro">
        <input
          value={this.props.value}
          onChange={this.props.handleChange}
          name={this.props.name}
          type="text"
          className="input__field input__field--kuro"
        />
        <label className="input__label input__label--kuro">
          <span className="input__label-content input__label-content--kuro">
            {this.props.label}
          </span>
        </label>
      </span>
      // <input
      //   value={this.props.value}
      //   onChange={this.props.handleChange}
      //   type="text"
      //   name={this.props.name}
      // />
    )
  }
}
