import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      handshake: file(relativePath: { eq: "handshake.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Hello. My name's Jeff and I build websites</h3>
            <p>
              I am a freelance web developer based in Belfast. I am passionate
              about design and building for web and mobile devices.
            </p>
            <div className="btn-row">
              <Link to="/work">What Do I Offer?</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.handshake.childImageSharp.fluid}></Img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlurb