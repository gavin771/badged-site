import React, { Component } from "react"
import "./input.css"

export default class Input extends Component {
  render() {
    return (
      <input
        className="input"
        value={this.props.value}
        onChange={e =>
          this.props.handleChange(this.props.stateName, e.target.value)
        }
        type="text"
        name={this.props.name}
        placeholder={this.props.label}
      />
    )
  }
}
