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
    @media(max-width: 1260px){
      grid-template-columns: 50% 50%;
    }
  `
  
  const BannerTextContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto repeat(2, 1fr); 

      h2:nth-child(2){
        font-family: ${theme.fontSecondary};
        font-size: 108px;
        margin: 0;
      }
      
      h1:nth-child(2){
        font-family: ${theme.fontPrimary};
        color: ${theme.gray};
        font-weight: 100;
        font-size: 44px;
        margin: 0 0 0 20%;
      }

      h2:nth-child(3){
        font-family: ${theme.fontSecondary};
        font-size: 63px;
        color: ${theme.gray};
        font-weight: 100;
        margin: 0 0 0 30%;
        text-align: left;
        padding-right: 1rem;

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
  width: 200px;
  height: 60px;
  text-transform: uppercase;
  font-size: 1.5rem;
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
    