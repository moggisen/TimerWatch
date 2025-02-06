
// src/components/TimerDisplay.jsx
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/TimerDisplay.jsx
import React from "react";

const TimerDisplay = ({ time }) => {
  // Konvertera tid (millisekunder) till minuter, sekunder och millisekunder
  const minutes = Math.floor(time / 6000); // Varje 6000 millisekunder är 1 minut
  const seconds = Math.floor((time % 6000) / 100); // Varje 100 millisekunder är 1 sekund
  const milliseconds = time % 100; // Millisekunder (0-99)

  return (
    <div className="timer-display">
      {/* Visa minuter, sekunder och millisekunder, fyll på med nollor om nödvändigt */}
      <span>{("0" + minutes).slice(-2)}:</span>
      <span>{("0" + seconds).slice(-2)}:</span>
      <span>{("0" + milliseconds).slice(-2)}</span>
    </div>
  );
};

export default TimerDisplay;
