import React from "react"

const Card = props => {
  return (
    <div className="overflow">
      <div className="card">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text} </p>
      </div>
    </div>
  )
}

export default Card
