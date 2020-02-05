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
    <CardImage>
      <Img fluid={data.whitecup.childImageSharp.fluid} />
    </CardImage>
  )
}

const CardImage = styled.div`
  border-radius: 10%;
  overflow: hidden;

`

export default MainCard
