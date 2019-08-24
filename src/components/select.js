import React, { Component } from "react"
import "./input.css"

export default class Select extends Component {
  render() {
    return (
      <select
        value={this.props.selected}
        onChange={e =>
          this.props.handleChange(this.props.stateName, e.target.value)
        }
      >
        {this.props.options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
    )
  }
}
