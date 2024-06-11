import React from 'react';
import Desk from './Desk';


const DeskList = ({ desks }) => {
  return (
    <div className="desk-list">
      {desks.map((desk, index) => (
        <Desk key={index} index={index} desk={desk} />
      ))}
    </div>
  );
};

export default DeskList;
