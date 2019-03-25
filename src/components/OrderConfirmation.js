import React from 'react';

export default ({
  onClose,
  selectedSize,
  selectedToppings,
  customerData: {
    name,
    email,
    confirmEmail,
    address,
    postCode,
    contactNumber
  },
}) => (
  
  <div className="confirmation-modal">
    <div className="modal">
      <div className="modal-box">
        <h1>Your Order Details</h1>
        <address>
          <p>{name}</p>
          <p>{email}</p>
          <p>{confirmEmail}</p>
          <p>{address}</p>
          <p>{postCode}</p>
          <p>{contactNumber}</p>
        </address>
        <hr />
        <div className="pizzas">
          <div className="pizza">
            <div className="pizza-confirm-size">
              <span>{selectedSize.name}</span>
              {/* <div>hello</div> */}        
            </div>                       
            <div className="pizza-confirm-toppings">
              {selectedToppings.map(({name, amount}) => (
                <div>{name}*{amount}</div>
              ))}
            </div>            
          </div>
        </div>
        <div className="actions">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="confirm">Confirm</button>
        </div>
      </div>
    </div>
  </div>
);

