import React from 'react';

export default function Toppings({ 
  toppings, 
  selectedToppings, 
  onToppingClick,
}) {
  return (
    <div className="toppings">    
      {toppings.map(topping => {
        const { name: toppingName } = topping;
        return (
          <div 
            className={`topping ${selectedToppings.find(({ name }) => name === topping.name) ? 'active' : ''}`}
            key={toppingName}
            onClick={() => onToppingClick(topping)}
          >
            <div className="img">
              <img 
                src={`https://toddmotto.com/angular-pizza-creator/assets/toppings/${toppingName}.svg`} 
                alt={toppingName}
              />
            </div>
            <span>{toppingName}</span>
          </div>
        )
      })}
    </div>
  );
}