import React, { useState } from 'react';

const BookingForm = ({ onBook, desks }) => {
  const [index, setIndex] = useState(1);
  const [hours, setHours] = useState(1);
  const [membership, setMembership] = useState('basic');

  const handleSubmit = (e) => {
    e.preventDefault();
    const zeroBasedIndex  =  index - 1;
    const type = zeroBasedIndex < 10 ? 'individual' : 'team';
    if (!desks[index]) {
      onBook(zeroBasedIndex, hours, type, membership);
    } else {
      alert('Desk is already booked!');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Desk</h2>
      <label>
        Desk Number:
        <input type="number" min="0" max="14" value={index} onChange={(e) => setIndex(parseInt(e.target.value))} />
      </label>
      <label>
        Hours:
        <input type="number" min="1" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
      </label>
      {index < 10 && (
        <label>
          Membership:
          <select value={membership} onChange={(e) => setMembership(e.target.value)}>
            <option value="basic">Basic - $10/hr</option>
            <option value="premium">Premium - $15/hr</option>
            <option value="executive">Executive - $20/hr</option>
          </select>
        </label>
      )}
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
