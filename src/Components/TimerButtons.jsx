/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/TimerButtons.jsx
import React from "react";

const TimerButtons = ({ onStart, onPause, onRestart, running, paused }) => {
  return (
    <div className="timer-buttons">
      <button onClick={onStart} disabled={running && !paused}>
        START
      </button>
      <button onClick={onPause} disabled={!running || paused}>
        PAUSE
      </button>
      <button onClick={onRestart}>RESTART</button>
    </div>
  );
};

export default TimerButtons;
