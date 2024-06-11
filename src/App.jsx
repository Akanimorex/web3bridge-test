import React, { useState } from 'react';
import DeskList from './components/DeskList';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [desks, setDesks] = useState(Array(15).fill(null));
  const [revenue, setRevenue] = useState({ basic: 0, premium: 0, executive: 0, team: 0 });

  const handleBooking = (index, hours, type, membership) => {
    const newDesks = desks.slice();
    newDesks[index] = { hours, type, membership };
    setDesks(newDesks);

    const pricePerHour = {
      basic: 10,
      premium: 15,
      executive: 20,
      team: 25
    };

    let price = type === 'individual' ? pricePerHour[membership] : pricePerHour['team'];
    let total = price * hours;

    if (hours > 3) {
      total *= 0.9; // 10% discount
    }

    setRevenue(prev => ({
      ...prev,
      [membership]: prev[membership] + (type === 'individual' ? total : 0),
      team: type === 'team' ? prev.team + total : prev.team
    }));
  };

  return (
    <div className="app">
      <h1>Co-working Space Booking System</h1>
      <DeskList desks={desks} />
      <BookingForm onBook={handleBooking} desks={desks} />
      <Dashboard revenue={revenue} />
    </div>
  );
};

export default App;
