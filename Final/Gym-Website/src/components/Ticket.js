import React, { useState } from 'react';
import './Ticket.css';

export default function Ticket() {
  // left selectedDate is useState hook to declare a state variable  
  // right selectedDate is function to update it.
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  // an event object e as a parameter, which represents the change event fired when the user selects a new date
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, we have received your message ~ Thank You`);
   
};

  return (
    <div className="ticket-container">
      <h1>預定健身房票</h1>
      <div className="form-group">
        <label>日期：</label>

        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <div className="form-group">
        <label>時間：</label>
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="">請選擇時間</option>
          <option value="morning">早上</option>
          <option value="afternoon">下午</option>
          <option value="evening">晚上</option>
        </select>
      </div>
      <div className="form-group">
        <label>類型：</label>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="">請選擇類型</option>
          <option value="yoga">瑜伽</option>
          <option value="cardio">有氧運動</option>
          <option value="weightlifting">重量訓練</option>
        </select>
      </div>
      <div className="form-group">
        <label>地址：</label>
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>
      <div className="form-group">
        <label>留言：</label>
        <textarea value={message} onChange={handleMessageChange} />
      </div>
      <button onClick={handleSubmit}>預定</button>
    </div>
  );
}