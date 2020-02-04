import React from "react"
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { IconContext } from "react-icons"


const Card = props => {
  return (
      <StyledCard>
          <div>
          <img src={props.imgsrc} alt="Current project" />
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text} </p>
          </div>
          <IconContext.Provider value={{ color: "black", size: '2em'}}>
          <FiGithub />


          </IconContext.Provider>
      </StyledCard>
  )
}

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 3%;
  padding-top: 10%;
  text-align: center;
  min-height: 280px;
    img:nth-child(1){
      max-width: 40%;
      margin: 0 25% 0 25%;
      
    }
    h4:nth-child(2){
      color: red;
      padding: 5% 1rem 0 1rem;
      text-align: left;

    }
    p:nth-child(3){
      text-align: left;
      padding: 0 1rem;
    }
`

export default Card
