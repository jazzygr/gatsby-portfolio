import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'


const Banner = () => {
  const data = useStaticQuery(graphql`
  query {
    lineDrawingMain: file(relativePath: { eq: "line-drawing-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  
  return (
    <>
    
    <Container>
    <BannerTextContainer>
    <p>Jeff Graham</p>
    </BannerTextContainer>

    <BannerImage>
    <Img fluid={data.lineDrawingMain.childImageSharp.fluid} />
    </BannerImage>    
    
    </Container>
    </>
    )
    
    
    
  }
  
  
  
  //Styles
  
  const theme = {
    white: "#fff",
    black: "#000",
    gray: "#818181",
    primary: "#0088a9",
    secondary: "#59FFA0"
  }
  
  const Container = styled.div`
  display: flex;
  width: 1640px;
  min-width: 1640px;
  margin: 0 auto;
  @media(max-width: 1800px){
    width: 1200px;
    min-width: 1200px;
  }
  @media(max-width: 1200px){
    width: 900px;
    min-width: 900px;
  }
  @media(max-width: 900px){
    width: 600px;
    min-width: 600px;
  }
  @media(max-width: 600px){
    width: 320px;
    min-width: 320px;
  }
  
  `
  
  const BannerTextContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.white};
  position: relative;  
  height: 80vh; 
  p:first-child{
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 20px;
    font-weight: 700;
    color: ${theme.white};
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-100%);
    text-align: center;
    mix-blend-mode: difference;
    z-index: 9;
  
  `
  
  const BannerImage = styled.div`
  margin: 0 auto;
  @media(max-width: 1800px){
    width: 1200px;
    max-width: 1200px;
  }
  @media(max-width: 1200px){
    width: 900px;
    max-width: 900px;
  }
  @media(max-width: 900px){
    width: 600px;
    max-width: 600px;
  }
  @media(max-width: 600px){
    width: 320px;
    max-width: 320px;
  }
  div:first-child{
    margin-top: 20%;


    
    
  }
  `
  
  export default Banner
  