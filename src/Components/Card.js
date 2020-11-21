import React from 'react';
import './Card.css';

const Card = ({ item, index }) => {
  console.log('--- Card ---')
  console.log(item)
  console.log(index)
  const urlImage = `https://${item.image}`;

  return (
    <div key={index} className="product">
      <div className="image">
        <img src={urlImage} alt="" />
      </div>
      <div className="price">
        <div className="one">{item.brand} {item.description}</div>
        <div className="two">${item.price} { item.final_price ? "50%" : ""}</div>
        <div className="three">{item.final_price ? item.final_price : ""}</div>
        <div className="four">(despacho) (retiro)</div>
        <input type="button" value="Agregar"/>
      </div>
    </div>
  )
}

export default Card;
