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
          <h1>Portfolio and skills</h1>
        </TextContainer>
        <CardContainer>
          <MainCard />
            <Card imgsrc={img1} title="Console" text="Test"/>
            <Card imgsrc={img2} title="Develop" text="Test"/>
            <Card imgsrc={img3} title="Pay me bruh" text="Test"/>
            <Card imgsrc={img4} title="Good stuff" text="Test"/>
        </CardContainer>  
      </Container>
    )
  }
}

const Container = styled.div`
  display:grid;
  grid-template-columns: auto 60%;
`

const TextContainer = styled.div`

`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
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



export default Skills
