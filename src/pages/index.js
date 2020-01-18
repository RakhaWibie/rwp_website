import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
      <div className="home-1"></div>
      <div className="home-2"></div>
      <div className="home-3"></div>
      <div className="home-4"></div>
      <div className="home-5"></div>
      <div className="home-6"></div>
      <div className="home-7"></div>
    </div>
  </Layout>
)

// export const query = graphql`

// `

export default IndexPage
