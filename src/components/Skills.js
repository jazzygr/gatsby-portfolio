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
      <h1>Portfolio</h1>
      </LineContainer>
      <h2>and <span>skills</span></h2>
      </TextContainer>
      <CardContainer>
      <MainCard />
      <Card imgsrc={img1} title="Javascript Piano" text="A javascript piano that works across one octave."/>
      <Card imgsrc={img2} title="RGB Colour Picker" text="A larger project to test your RGB knowledge"/>
      <Card imgsrc={img3} title="Pay me bruh" text="Test"/>
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
  
  `
  
  const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 45px 10% auto;
  h1:nth-child(2){
    font-size: 3rem;
  }
    h2{
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  div:nth-child(1){
    grid-area: 1 / 1 / 3 / 3;
  }
  div:nth-child(2){
    grid-area: 1 / 3 / 3 / 4;
  }
  div:nth-child(3){
    grid-area: 3 / 1 / 5 / 2;
  }
  div:nth-child(4){
    grid-area: 3 / 2 / 5 / 3;
  }
  div:nth-child(5){
    grid-area: 3 / 3 / 5 / 4;
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
  