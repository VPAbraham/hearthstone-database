import React from 'react';

const Card = (props) => {
   return (
     <div className="card-display">
       <h4>{props.name}</h4>
       <img src={props.img} alt={props.name}/>
     </div>
   )
}

export default Card;