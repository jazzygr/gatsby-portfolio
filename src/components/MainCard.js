import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const MainCard = props => {
    const data = useStaticQuery(graphql`
    query {
      whitecup: file(relativePath: { eq: "whitecup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fluid={data.whitecup.childImageSharp.fluid} />
    </div>
  )
}

export default MainCard
