import React from 'react';
import pizza from '../images/pizza.png';

export default function Sizes({
  sizes,
  selectedSize,
  onSizeClick,  
}) {
  return(
    <div className="sizes">
      {sizes.map(size => {
        const {name, inches} = size;
        return(
          <div
            className={`size ${selectedSize.name === name ? 'acitve' : ''}`}
            onClick={() => onSizeClick(size)}
          >
            <img src={pizza} className={`pizza ${name}`} />
            <span>{`${name} (${inches}')`}</span>
          </div>    
        );
      })}
    </div>  
  );
} 