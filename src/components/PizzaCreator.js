import React from 'react';
import toppings from '../data/toppings';
import Toppings from './Toppings';
import sizes from '../data/sizes';
import Sizes from './Sizes';
import Summary from './Summary';
import OrderConfirmation from './OrderConfirmation';
import CustomerInfo from './CustomerInfo';

export default class PizzaCreator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      toppings,
      selectedToppings: [],
      selectedSize: {},
      sizes,
      showOrderConfirmation: false,
      customerData: {
        // name: '',
        // email: '',
        // confirmEmail: '',
        // address: '',
        // postCode: '',
        // contactNumber: '',
      },
    }  
    this.onToppingClick = this.onToppingClick.bind(this);
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onToppingAddClick = this.onToppingAddClick.bind(this);
    this.onToppingMinusClick = this.onToppingMinusClick.bind(this);
    this.onCustomerDataChange = this.onCustomerDataChange.bind(this);
  } 
  
  onToppingClick(topping) {
    const {selectedToppings} = this.state;
    const exsistingToppings = this.state.selectedToppings.find(({name}) => name === topping.name); 
    
    const newSelectedToppings = !exsistingToppings 
      ? [{ ...topping, amount: 1 }, ...selectedToppings] 
      : selectedToppings.filter(({ name }) => name !== topping.name);
    
    this.setState({
      selectedToppings: newSelectedToppings,
    });  
  }

  onSizeClick(size) {
    this.setState({
      selectedSize: size,
    });
  }

  onToppingAddClick(topping) {
    const {selectedToppings} = this.state;
    const newSelectedToppings = selectedToppings.map(selectedTopping =>{
    
      // const newAmount = (selectedTopping.name === topping.name)
      //   ? topping.amount+1 
      //   : topping.amount;
      
      if(selectedTopping.name === topping.name) {
        const newAmount = topping.amount+1;
        return {...topping, amount:newAmount,}
      }

      return selectedTopping;
    });

    this.setState({
      selectedToppings: newSelectedToppings,
    });    
  }

  onToppingMinusClick(topping) {
    const {selectedToppings} = this.state;
    const newSelectedToppings = selectedToppings.map(selectedTopping =>{
    
      // const newAmount = (selectedTopping.name === topping.name)
      //   ? topping.amount-1
      //   : topping.amount;
      if(selectedTopping.name === topping.name) {
        const newAmount = topping.amount-1;
        if (newAmount === 0) {
          return undefined;
        }
        return {...topping, amount:newAmount,}
      }
      return selectedTopping;
    }).filter(newSelectedTopping => !!newSelectedTopping);

    this.setState({
      selectedToppings: newSelectedToppings,
    });    
  }

  onCustomerDataChange(name, value) {
    const { customerData } = this.state;
    const newCustomerData = {
      ...customerData,
      [name]: value,
    };

    this.setState({
      customerData: newCustomerData,
    });
  }

  render() {
    const {
      toppings,
      selectedToppings,
      selectedSize,
      sizes,
      showOrderConfirmation,
      customerData, 
    }= this.state;

    return (
      
      <React.Fragment>
        {showOrderConfirmation && 
          <OrderConfirmation
            selectedToppings={selectedToppings}
            onClose={() => this.setState({ showOrderConfirmation: false })}
            selectedSize={selectedSize}
            customerData={customerData}
          />
        }
      <div className="section">
        <h1>Enter Your Details</h1>
        <CustomerInfo
           data={customerData}
           onCustomerDataChange={this.onCustomerDataChange}
        />
      </div>

      <div className="section">
        <h1>Choose Your Toppings</h1>
        <Toppings
          toppings={toppings}
          selectedToppings={selectedToppings}
          onToppingClick={this.onToppingClick} 
        />
      </div>

      <div className="section">
        <h1>Choose Your Sizes</h1>
        <Sizes
          sizes={sizes}
          selectedSize={selectedSize}
          onSizeClick={this.onSizeClick} 
        />
      </div>

      <div className="section">
        <h1>Order Summary</h1>
        <Summary
          selectedSize={selectedSize}
          selectedToppings={selectedToppings}
          onToppingAddClick={this.onToppingAddClick} 
          onToppingMinusClick={this.onToppingMinusClick}    
        />
      </div>

      <div className="section">
          <button
            type="submit"
            onClick={() => this.setState({ showOrderConfirmation: true })}
          >
            Place Your Order
          </button>
        </div>

        {/* {showOrderConfirmation && 
          <OrderConfirmation
            selectedToppings={selectedToppings}
            onClose={() => this.setState({ showOrderConfirmation: false })}
          />
        } */}
      </React.Fragment>
    );
  }
}