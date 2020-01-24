import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'


const Banner = () => {
  const data = useStaticQuery(graphql`
  query {
    lineDrawingMain: file(relativePath: { eq: "line-drawing-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
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
    <h2>Hey</h2>
    <h1>I'm Jeff</h1>
    <h2>I build websites.</h2>
    <div>
    <button>Hire Me</button>
    <button>Get CV</button>
    </div>
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
    secondary: "#59FFA0",
    fontPrimary: "Merriweather",
    fontSecondary: "Lora"
  }
  
  const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 3rem;

  
  `
  
  const BannerTextContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  max-height: 80vh;
  
  h2:nth-child(1){
    font-family: ${theme.fontSecondary};
    font-size: 2.5rem;
    padding: 0;
    margin-left: 1rem;
    
    @media(max-width: 1260px){
      font-size: 1.5rem;
    }
    @media(max-width: 950px){
      font-size: 1.3rem;
    }
  }
  
  h1:nth-child(2){
    font-family: ${theme.fontPrimary};
    font-size: 4rem;
    text-transform: uppercase;
    margin: 2rem;

    @media(max-width: 1260px){
      font-size: 3rem;
    }
    @media(max-width: 950px){
      font-size: 2.5rem;
    }
  }

  h2:nth-child(3){
    font-family: ${theme.fontSecondary};
    font-size: 1.8rem;
    margin: 0rem 0 1rem 8rem;

    @media(max-width: 1260px){
      font-size: 1.5rem;
    }
    @media(max-width: 50px){
      font-size: 1rem;
    }
  }
  
  `
  
  const BannerImage = styled.div`

    div:first-child{
      width: 70%;
      margin: 0 auto;
      margin-right: 2rem;
    }  
    `
    
    export default Banner
    