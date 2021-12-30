import * as React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// markup
const IndexPage = ({data}) => {
  return (
  <Layout>
    <div className="hero-container">
        <div className="hero-img">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        </div>
        <div className="hero-tex-container">
            <div className="hero-text-wrapper">
            <h3>Skoro wiesz już o nas więcej - pozwól teraz pokazać co potrafimy.</h3>
            <p>Umów się na BEZPŁATNE spotkanie wstępne - które pozwoli nam bliżej poznać Twoje potrzeby. Poniżej dostępny link - do naszego kalendarza online - gdzie możesz zabukować wygodny dla Ciebie termin.</p>
            <h4>UWAGA: jeśli zdecydujesz się na nasze usługi do końca tygodnia - to:</h4>

<ol>
  <li>Przeniesienie całej dokumentacji wraz z audytem wstępnym - otrzymasz GRATIS</li>
  <li>Pierwszy miesiąc obsługi GRATIS!</li>
</ol>
<a href="">Umów spotkanie</a>
            </div>
            
        </div>
    </div>
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql `
query succesQuery {
  file(relativePath: {eq: "aircraft.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}`