import React, { Component } from "react"

// import Button from "./button"
import Input from "./input"

export default class Badge extends Component {
  state = {
    badgeTitle: "",
    badgeValue: "",
    badgeColor: "",
    badgeTemplate: "",
    url: "https://hidden-forest-44927.herokuapp.com/generate",
  }

  generateUrl = () => {
    console.log(
      `${this.state.url}?template=${this.state.badgeTemplate}&color=${
        this.state.badgeColor
      }${this.state.badgeTitle ? "&title=" + this.state.badgeTitle : ""}${
        this.state.badgeValue ? "&value=" + this.state.badgeValue : ""
      }`
    )
  }

  onTitleChange = e => {
    this.setState({ badgeTitle: e.target.value }, () => {
      this.generateUrl()
    })
  }

  onValueChange = e => {
    this.setState({ badgeValue: e.target.value }, () => {
      this.generateUrl()
    })
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <br />
        <Input
          value={this.state.badgeTitle}
          name="badge-title"
          handleChange={this.onTitleChange}
          label="Badge Title"
        />
        <br />
        <Input
          value={this.state.badgeValue}
          name="badge-value"
          handleChange={this.onValueChange}
          label="Badge Value"
        />
        <br />
        <select>
          <option value="brightgreen">Bright Green</option>
          <option value="green">Green</option>
          <option selected value="yellow">
            Yellow
          </option>
          <option value="yellowgreen">Yellow Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option selected value="blue">
            Blue
          </option>
          <option value="grey">Grey</option>{" "}
          <option value="lightgrey">Light Grey</option>
        </select>
        <br />
        <select>
          <option value="flat">Flat</option>
          <option value="plastic">Plastic</option>
          <option selected value="flat-square">
            Falt-Square
          </option>
          <option value="social">Social</option>
        </select>
        <br />
        <br />
        {/* <Button clickAction={this.generateUrl} title="Generate" /> */}
      </div>
    )
  }
}
