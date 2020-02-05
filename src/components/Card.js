import React from "react"
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { IconContext } from "react-icons"


const Card = props => {
  return (
      <StyledCard>
            <img src={props.imgsrc} alt="Current project" />
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.text} </p>
          <IconContext.Provider value={{ color: "black", size: '2em'}}>
            <FiGithub />
          </IconContext.Provider>
      </StyledCard>
  )
}

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 3%;
  display: grid;
  grid-template-rows: 30% 10% auto 20%;
  justify-items: center;

    img:nth-child(1){
      max-width: 25%;
      
    }

    p:nth-child(3){
      font-family: 'Merriweather Sans', sans-serif;
    }
`

export default Card
