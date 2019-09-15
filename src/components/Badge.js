import React, { Component } from "react"

import Input from "./input"
import Select from "./select"

export default class Badge extends Component {
  state = {
    badgeTitle: "",
    badgeValue: "",
    badgeColor: "brightgreen",
    badgeTemplate: "flat-square",
    url: "/.netlify/functions/generateBadge",
    prettyUrl:
      "https://custom-badge.gavinsamuels.com/.netlify/functions/generateBadge?template=flat-square&color=brightgreen&title=Default%20Title&value=Default%20Value",
  }

  generateUrl = () => {
    this.setState({
      prettyUrl: `https://custom-badge.gavinsamuels.com/.netlify/functions/generateBadge?template=${
        this.state.badgeTemplate
      }&color=${this.state.badgeColor}&title=${this.state.badgeTitle ||
        "Default Title"}&value=${this.state.badgeValue || "Default Value"}`,
      url: `/.netlify/functions/generateBadge?template=${
        this.state.badgeTemplate
      }&color=${this.state.badgeColor}&title=${this.state.badgeTitle ||
        "Default Title"}&value=${this.state.badgeValue || "Default Value"}`,
    })
  }

  componentDidMount() {
    this.generateUrl()
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value }, () => {
      this.generateUrl()
    })
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <br />
        <Input
          stateName="badgeTitle"
          value={this.state.badgeTitle}
          name="badge-title"
          handleChange={this.handleChange}
          label="Badge Title"
        />
        <br />
        <Input
          stateName="badgeValue"
          value={this.state.badgeValue}
          name="badge-value"
          handleChange={this.handleChange}
          label="Badge Value"
        />
        <br />
        <Select
          stateName="badgeColor"
          selected={this.state.badgeColor}
          handleChange={this.handleChange}
          options={[
            { value: "brightgreen", text: "Bright Green" },
            { value: "green", text: "Green" },
            { value: "yellow", text: "Yellow" },
            { value: "yellowgreen", text: "Yellow Green" },
            { value: "orange", text: "Orange" },
            { value: "red", text: "Red" },
            { value: "blue", text: "Blue" },
            { value: "grey", text: "Grey" },
            { value: "lightgrey", text: "Light Grey" },
          ]}
        />
        <Select
          stateName="badgeTemplate"
          selected={this.state.badgeTemplate}
          handleChange={this.handleChange}
          options={[
            { value: "flat", text: "Flat" },
            { value: "plastic", text: "Plastic" },
            { value: "flat-square", text: "Flat Square" },
            { value: "social", text: "Social" },
          ]}
        />

        <div>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>
            {this.state.prettyUrl}
          </p>
          <img src={this.state.url} />
        </div>
      </div>
    )
  }
}
