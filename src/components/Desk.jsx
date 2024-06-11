import React from 'react';

const Desk = ({ index, desk }) => {
  const type = index < 10 ? 'Individual' : 'Team';
  const status = desk ? 'Booked' : 'Available';
  return (
    <div className={`desk ${status.toLowerCase()}`}>
      <p>{type} Desk {index + 1}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Desk;
