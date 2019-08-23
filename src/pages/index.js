import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Badge from "../components/Badge"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        marginBottom: `1.45rem`
      }}
    >
      <Badge />
    </div>
  </Layout>
)

export default IndexPage
