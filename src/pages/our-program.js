import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OurProgramPage = ({data}) => (
  <Layout>
    <SEO title="Our Program" />
    Our program
    {console.log(data)}
  </Layout>
)

export const query = graphql`
query {
allMarkdownRemark {
    edges {
    node {
        id
        fields {
        slug
        }
        frontmatter {
        title
        description
        }
        internal {
        content
        }
    }
    }
}
}  
`

export default OurProgramPage