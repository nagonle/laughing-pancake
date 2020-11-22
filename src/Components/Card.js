import React from 'react';
import './Card.css';

const Card = ({ item, index }) => {
  const urlImage = `https://${item.image}`;

  return (
    <div key={index} className="product">
      <div className="image">
        <img src={urlImage} alt="" />
      </div>
      <div className="price">
        <div className="one"><span className="brand">{item.brand}</span> <span className="desc">{item.description}</span></div>
        <div className="two">${item.final_price ? item.final_price : item.price} { item.final_price ? <span className="discount">50%</span> : ""}</div>
        <div className="three">{item.final_price ? "$" + item.price : ""}</div>
        <div className="four"><span className="delivery">despacho</span> <span className="pickup">retiro</span></div>
        <input className="add-button" type="button" value="Agregar"/>
      </div>
    </div>
  )
}

export default Card;
