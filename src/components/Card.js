import React from "react"
import styled from 'styled-components'

const Card = props => {
  return (
      <StyledCard>
          <img src={props.imgsrc} alt="" className="card-img-top" />
          <div>
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text} </p>
          </div>
      </StyledCard>
  )
}

const StyledCard = styled.div`
  border: 1px solid black;
  padding-top: 10%;
    img:nth-child(1){
      max-width: 100px;
      margin: 0 25% 0 25%;
      
    }
    h4:nth-child(1){
      color: red;
    }
    p:nth-child(2){
      color: orange;
    }
`

export default Card
