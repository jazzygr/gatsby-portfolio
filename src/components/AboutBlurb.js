import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      whoAmI: file(relativePath: { eq: "who-am-i.png" }) {
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
      <BannerImage>
      <Img fluid={data.whoAmI.childImageSharp.fluid} />
      </BannerImage> 
        <BannerTextContainer>
            <LineContainer>
                <h2>Who Am I?</h2>
                <div></div>
            </LineContainer>
            <BannerText>
                <span>Lorem bow wow wow yo mamma sit amizzle, consectetuer adipiscing elit. Stuff izzle velit, i saw beyonces tizzles and my pizzle went crizzle mah nizzle, doggy bizzle, fo shizzle vizzle, rizzle.</span><br></br>
                <span>Lorem bow wow wow yo mamma sit amizzle, consectetuer adipiscing elit. Stuff izzle velit, i saw beyonces tizzles and my pizzle went crizzle mah nizzle, doggy bizzle, fo shizzle vizzle, rizzle.</span>
            </BannerText>
            <Button inverse="inverse">Get CV</Button>
        </BannerTextContainer>
        
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
grid-template-columns: 50% 50%;
min-height: 90vh;
  @media(max-width: 960px){
    grid-template-columns: 60% 40%;
    
  }
`

const BannerTextContainer = styled.div`
display: grid; 

  h2{
    margin: 0;
  }
`
const BannerText = styled.p`
  font-size: 1.5rem;
  padding-right: 1rem;
  @media(max-width: 960px){
    font-size: 1rem;
    
  }
  color: ${theme.gray};
  span{
    display: grid;
  }
`


const Button = styled.button`
width: 180px;
height: 50px;
text-transform: uppercase;
font-size: 1.5rem;
background-color: ${theme.white};
color: black;
border: 3px solid ${theme.black};
border-radius: 2px;

`


const LineContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  font-size: 2rem;
  @media(max-width: 960px){
    font-size: 1rem;
    }
    
    div {
      background-color: ${theme.primary};
      height: 2px;
      min-width: 60px;
      margin-right: -1px;
      margin-left: 1rem;
    }
  
`

const BannerImage = styled.div`
  div:first-child{
    width: 100%;
    transform: scaleX(-1);

    
  }  
  `

export default AboutBlurb