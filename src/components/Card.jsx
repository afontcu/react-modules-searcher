import React from 'react'

const cardStyles = {
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
  borderRadius: '4px',
  padding: '12px',
}

const Card = props => (
  <div className="Card" style={cardStyles}>
    {props.children}
  </div>
)

export default Card
