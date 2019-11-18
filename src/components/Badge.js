import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Input from "./input"
import Select from "./select"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      badegImage: file(relativePath: { eq: "badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.badegImage.childImageSharp.fluid} />
}

export default class Badge extends Component {
  state = {
    badgeTitle: "",
    badgeValue: "",
    html: "",
    markup: "",
    badgeColor: "brightgreen",
    badgeTemplate: "flat-square",
    url: "/.netlify/functions/generateBadge",
    prettyUrl:
      "https://custom-badge.gavinsamuels.com/.netlify/functions/generateBadge?template=flat-square&color=brightgreen&title=Default%20Title&value=Default%20Value",
  }

  generateUrl = () => {
    this.setState({
      prettyUrl: encodeURI(
        `https://custom-badge.gavinsamuels.com/.netlify/functions/generateBadge?template=${
          this.state.badgeTemplate
        }&color=${this.state.badgeColor}&title=${this.state.badgeTitle ||
          "Default Title"}&value=${this.state.badgeValue || "Default Value"}`
      ),
      url: `/.netlify/functions/generateBadge?template=${
        this.state.badgeTemplate
      }&color=${this.state.badgeColor}&title=${this.state.badgeTitle ||
        "Default Title"}&value=${this.state.badgeValue || "Default Value"}`,
      html: `<img src=${encodeURI(
        `https://custom-badge.gavinsamuels.com/.netlify/functions/generateBadge?template=${
          this.state.badgeTemplate
        }&color=${this.state.badgeColor}&title=${this.state.badgeTitle ||
          "Default Title"}&value=${this.state.badgeValue || "Default Value"}`
      )} alt="custom badge generated">`,
      markdown: `![GS Custom Badge](${encodeURI(
        `https://custom-badge.gavinsamuels.com/.netlify/functions/generateBadge?template=${
          this.state.badgeTemplate
        }&color=${this.state.badgeColor}&title=${this.state.badgeTitle ||
          "Default Title"}&value=${this.state.badgeValue || "Default Value"}`
      )})`,
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
      <header className="header">
        <div className="header-left">
          <h1>Badged</h1>
          <p>A simple way to create and share you own custom badge.</p>

          <div className="header-left-photo">
            <Image />
          </div>
          <div id="triangle-right"></div>
        </div>

        <div className="header-right">
          <div className="badge">
            <img
              id="custom-badge"
              src={this.state.url}
              alt="custom badge generated"
            />
          </div>

          <p>
            Update the fields below and copy the snippet that best fits your
            needs.
          </p>

          <div className="input-groups">
            <Input
              stateName="badgeTitle"
              value={this.state.badgeTitle}
              name="badge-title"
              handleChange={this.handleChange}
              label="Badge Title"
            />
            <Input
              stateName="badgeValue"
              value={this.state.badgeValue}
              name="badge-value"
              handleChange={this.handleChange}
              label="Badge Value"
            />
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
          </div>

          <div className="generated-code">
            Raw URL
            <p id="raw-link">{this.state.prettyUrl}</p>
          </div>

          <div className="generated-code">
            Image tag
            <p id="html-generated">{this.state.html}</p>
          </div>

          <div className="generated-code" id="markup-generated">
            Markdown snippet
            <p id="markup-generated">{this.state.markdown}</p>
          </div>
        </div>
      </header>
    )
  }
}
