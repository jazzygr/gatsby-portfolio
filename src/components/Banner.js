import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import "../styles/global"


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
            <LineContainer>
                <div></div>
                <h2>Hey</h2>
            </LineContainer>
          <h1>My name's Jeff</h1>
          <h2>I build <span>websites.</span></h2>
          <div>
            <Button>Contact</Button>
            <Button inverse="inverse">Get CV</Button>
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
    gray: "#707070",
    primary: "#0088a9",
    secondary: "#59FFA0",
    fontPrimary: "Merriweather Sans",
    fontSecondary: "Lato",

  }

  const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100vh;
  align-items: center; 
  `
  
  const BannerTextContainer = styled.div`
  display: grid;
  grid-template-rows: auto; 

      h2:nth-child(2){
        font-family: ${theme.fontSecondary};
        font-size: 6rem;
        @media(max-width: 1120px){
          font-size: 4rem;
        }
      }
      
      h1:nth-child(2){
        font-family: ${theme.fontPrimary};
        color: ${theme.gray};
        font-weight: 100;
        font-size: 2rem;
        margin-left: 20%;
        @media(max-width: 1120px){
          font-size: 1.4rem;
        }
      }

      h2:nth-child(3){
        font-family: ${theme.fontSecondary};
        font-size: 3.5rem;
        color: ${theme.gray};
        font-weight: 100;
        margin-left: 30%;
          @media(max-width: 1120px){
            font-size: 2.5rem;
          }
        span {
          font-weight: 800;
        }

  }



  div:nth-child(4) {
    display: grid;
    grid-template-columns: 40% auto;
    align-items: center;
    padding: 3% 0 0 10%;
  }
  
  `


const Button = styled.button`
  width: 10rem;
  height: 3rem;
  text-transform: uppercase;
  font-size: 1rem;
  background-color: ${props => (props.inverse ? theme.white : theme.black)};
  color: ${props => (props.inverse ? theme.black : theme.white)};
  border: 3px solid ${theme.black};
  border-radius: 2px;

`

  
  const LineContainer = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr;
    align-items: center;
    div {
      background-color: ${theme.black};
      height: 2px;
      margin-left: -1px;
    }
    
  `
  const BannerImage = styled.div`

    div:first-child{
      width: 100%;
    }  
    `

    
    
    export default Banner
    