import * as React from "react"
import './hero.css'
import Subscribe from './Subscribe'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Hero = ({hero, cover}) =>{
    
return(
    <div className="hero-container">
                <h2>Przygotowaliśmy coś specjalnie dla Ciebie!</h2>

        <div className="hero-img">
        <GatsbyImage image={hero.childImageSharp.gatsbyImageData} />
        </div>
        <div className="hero-tex-container">
            <div className="hero-text-wrapper">
            <div className="hero-cover">
            <GatsbyImage image={cover.childImageSharp.gatsbyImageData} />
            </div>
            
            <div className="ero-form-wrapper">
                <h4>Pobierz bezpłatny ebook</h4>
            <p> - który zwięźle opisuje zmiany w podatkach na <b>2022</b>, które czekają każdego przedsiębiorcę.</p>
            <Subscribe />
            </div>
        </div>
            
        </div>
    </div>
)
}

export default Hero