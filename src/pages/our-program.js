import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Card = ({title, desc, thumbnail, date, bodyText}) => (
    <section className="card">
        <img src={thumbnail} style={{
            objectFit: 'cover',
            width: '100%'
        }}/>
        <section className="card-container">
            <div className="card-header">
                <div className="card-title">{title}</div>
                <div className="card-desc">{desc}</div>
                <div className="card-date">{date}</div>
            </div>
            {/* <div className="card-body">
                <div dangerouslySetInnerHTML={{__html: bodyText}}></div>
            </div> */}
        </section>
    </section>
)

const OurProgramPage = ({data}) => (
  <Layout>
    <SEO title="Our Program" />
    <section class="hero">
        <h1>A look into our culture.</h1>
        <article>
            <p>Take a deep dive into what makes our culture so great.</p>
        </article>
    </section>
    <section className="blogs">
        <ul style={{ listStyleType: 'none', margin: 0 }}>
            {data.allMarkdownRemark.edges.map(({node}, index) => {
                return (
                    <li>
                    <Link to={node.fields.slug} style={{
                        textDecoration: 'inherit',
                        color: 'inherit'
                    }}>
                        <Card title={node.frontmatter.title}
                            desc={node.frontmatter.description}
                            thumbnail={node.frontmatter.thumbnail}
                            date={node.frontmatter.date}
                            bodyText={node.html}/>
                    </Link>
                    </li>
                )
            })}
        </ul>
    </section>
    
    {/* <div className="center-right-area">
        Our program
        {console.log(data.allMarkdownRemark)}
        {data.allMarkdownRemark.edges.map(({node}, index) => {
            return (
                <Link to={node.fields.slug} style={{
                    textDecoration: 'inherit',
                    color: 'inherit'
                }}>
                    <Card title={node.frontmatter.title}
                        desc={node.frontmatter.description}
                        thumbnail={node.frontmatter.thumbnail}
                        date={node.frontmatter.date}
                        bodyText={node.html}/>
                </Link>
            )
        })}
    </div> */}
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
          fields {
            slug
          }
        }
      }
    }
  }
  
`

export default OurProgramPage