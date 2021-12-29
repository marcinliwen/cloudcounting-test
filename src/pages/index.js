import * as React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from "gatsby"


// markup
const IndexPage = ({data}) => {
  return (
  <Layout>
    <Hero img={data} />
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql `
query MyQuery {
  file(relativePath: {eq: "aircraft.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}`