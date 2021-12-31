import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Video from "../components/Video";
import CalendarIcon from "../images/calendar.png";
// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="hero-container success">
        <div className="hero-img">
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        </div>
        <div className="hero-tex-container">
          <div className="hero-text-wrapper">
            <Video />
            <h3>
              Skoro wiesz już o nas więcej - pozwól teraz pokazać co potrafimy.
            </h3>
            <p>
              Umów się na BEZPŁATNE spotkanie wstępne - które pozwoli nam bliżej
              poznać Twoje potrzeby.
            </p>

            <a
              href="https://calendly.com/cloudcounting/spotkanie-wstepne"
              className="btn"
              target="popup" 
              onClick={()=>window.open('https://calendly.com/cloudcounting/spotkanie-wstepne','popup','width=600,height=600') }
            >
              <img src={CalendarIcon} width="24px" />
              Umów spotkanie
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query succesQuery {
    file(relativePath: { eq: "aircraft.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
