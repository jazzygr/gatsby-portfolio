import React, { Component } from "react"
import styled from "styled-components"
import Card from "./Card"
import MainCard from "./MainCard"
import img1 from "../images/icon1.svg"
import img2 from "../images/icon2.svg"
import img3 from "../images/icon3.svg"
import img4 from "../images/icon4.svg"


class Skills extends Component {
  render() {
    return (
      <Container>
      <TextContainer>
      <LineContainer>
      <div></div>
      <h2>Portfolio</h2>
      </LineContainer>
      <h3>and <span>skills</span></h3>
      </TextContainer>
      <CardContainer>
        <MainCard onClick={this.state}/>
        <Card imgsrc={img1} title="Javascript Piano" text="A javascript piano that works across one octave."/>
        <Card imgsrc={img2} title="RGB Colour Picker" text="A larger project to test your RGB knowledge"/>
        <Card imgsrc={img3} title="Portfolio Website" text="This website, built using Gatsby.js with styled components and Spring.js"/>
        <Card imgsrc={img4} title="Good stuff" text="Test"/>
      </CardContainer>  
      </Container>
      )
    }
  }

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
  display:grid;
  margin-right: .5rem;
  grid-template-columns: auto 70%;
  padding-bottom: 3rem;
  @media(max-width:960px) {
    grid-template-columns: 50% 50%;
  }

  
  `
  
  const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 45px 10% auto;
  h2:nth-child(2){
    font-size: 3rem;
  }
    h3{
      font-size: 2rem;
      color: ${theme.gray};
      font-weight: 100;
      padding-left: 40%;
    }
    span{
      font-size: 2.5rem;
      font-weight: 900;
    }
  `
  
  const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  div:nth-child(1){
    grid-column-start: span 2;
    :hover {
      opacity: 0.5;
      transition: 0.7s;
    }
  }

  @media(max-width:960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  `
  const LineContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    div {
      background-color: ${theme.black};
      height: 2px;
      margin-left: -1px;
    }
    
  `
  
  
  export default Skills
  