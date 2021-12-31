import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Video from "../components/Video";
import CalendarIcon from "../images/calendar.png";
import Modal from 'react-modal';
import Close from '../images/close.svg'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '80vh',
    maxWidth: '100%',
    width: '900px',
    padding: '0',
    zIndex: '1000'
  },
};

// markup
const IndexPage = ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }

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

            <button
              //href="https://calendly.com/cloudcounting/spotkanie-wstepne"
              className="btn"
              onClick={()=>setIsOpen(true)}
            >
              <img src={CalendarIcon} width="24px" />
              Umów spotkanie
            </button>
            <Modal
              isOpen={modalIsOpen}
              //onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              
            >
              <div className="modal-header"> <button onClick={()=>setIsOpen(false)}><img src={Close} /></button></div>
               <iframe className="modal" src="https://calendly.com/cloudcounting/spotkanie-wstepne" />
            </Modal>
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
