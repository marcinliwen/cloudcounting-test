import * as React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from "gatsby"


// markup
const IndexPage = ({data}) => {
  console.log(data)
  return (
  <Layout>
    <Hero hero={data.hero} cover={data.cover} />
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql `
query MyQuery {
  hero:file(relativePath: {eq: "aircraft.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  cover:file(relativePath: {eq: "ebook.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  } 
}`