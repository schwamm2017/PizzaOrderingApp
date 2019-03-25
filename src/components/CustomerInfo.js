import React from 'react';

export default ({
  data,
  onCustomerDataChange,  
}) => (
  <div className="details">
    <div className="form-control">
      <label>Name</label>
      <input type="text" value={data.name} onChange={({ target: { value } }) => onCustomerDataChange('name', value)}  />
    </div>
    <div className="form-control">
      <label>Email</label>
      <input type="text" value={data.email} onChange={({ target: { value } }) => onCustomerDataChange('email', value)}/>
    </div>
    <div className="form-control">
      <label>Confirm Email</label>
      <input type="text" value={data.confirmEmail} onChange={({ target: { value } }) => onCustomerDataChange('confirmEmail', value)}/>
    </div>
    <div className="form-control">
      <label>Address</label>
      <input type="text" value={data.address} onChange={({ target: { value } }) => onCustomerDataChange('address', value)} />
    </div>
    <div className="form-control">
      <label>Post Code</label>
      <input type="text" value={data.postCode} onChange={({ target: { value } }) => onCustomerDataChange('postCode', value)}/>
    </div>
    <div className="form-control">
      <label>Contact Number</label>
      <input type="text" value={data.contactNumber} onChange={({ target: { value } }) => onCustomerDataChange('contactNumber', value)}/>
    </div>
  </div>
);