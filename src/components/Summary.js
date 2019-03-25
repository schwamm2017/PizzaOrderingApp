import React from 'react';

export default ({
  selectedSize,
  selectedToppings,
  onToppingAddClick,
  onToppingMinusClick,
}) => ( 
  <ul className="sumSize">
    {
      <li>
        <span>{selectedSize.name}</span>
        <span />
        <span />
        <span>{` ${!!selectedSize.price? '$' + selectedSize.price : ''} `}</span>
      </li>
    }
   {selectedToppings.map(topping => {
     const{name, price, amount}= topping;
     return(
       <li>
         <button className="sumButton" onClick={() => onToppingAddClick(topping)}>+</button>
         <button className="sumButton" onClick={() => onToppingMinusClick(topping)}>-</button>
         <span>{name}</span>
         <span>* {amount}</span>
         <span>$ {amount * price}</span>
       </li>  
     )
    })}
  </ul>
);