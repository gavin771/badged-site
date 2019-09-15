import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from "../components/Badge"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="App">
        <Badge />
      </div>
    </div>
  </Layout>
)

export default IndexPage
