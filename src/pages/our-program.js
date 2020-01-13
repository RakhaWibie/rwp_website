import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Card = ({title, desc, thumbnail, date, bodyText}) => (
    <div className="card">
        <img src={thumbnail} style={{
            objectFit: 'cover',
            width: '100%',
            height: '350px'
        }}/>
        <div className="card-container">
            <div className="card-header">
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <span>{date}</span>
            </div>
            <div className="card-body">
                <div dangerouslySetInnerHTML={{__html: bodyText}}></div>
            </div>
        </div>
    </div>
)

const OurProgramPage = ({data}) => (
  <Layout>
    <SEO title="Our Program" />
    <div className="center-area">
        Our program
        {console.log(data.allMarkdownRemark)}
        {data.allMarkdownRemark.edges.map(({node}, index) => {
            return (
                
                    <Card title={node.frontmatter.title}
                        desc={node.frontmatter.description}
                        thumbnail={node.frontmatter.thumbnail}
                        date={node.frontmatter.date}
                        bodyText={node.html}/>
                
            )
        })}
    </div>
  </Layout>
)

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            thumbnail
            date(formatString: "MMMM Do, YYYY")
          }
          html
        }
      }
    }
  }
  
`

export default OurProgramPage