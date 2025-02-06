/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import TimerCard from "./Components/TimerCard"; // Importera din TimerCard-komponent
import "./App.css";

function App() {
  const [time, setTime] = useState(0); // Håller tid i millisekunder
  const [running, setRunning] = useState(false); // Om timern är igång
  const [paused, setPaused] = useState(false); // Om timern är pausad
  const [status, setStatus] = useState(""); // Statusen för timern
  const [statusClass, setStatusClass] = useState(""); // Klasser för statusen (t.ex. timer-running)

  useEffect(() => {
    let interval;

    // Om timern är igång och inte pausad, börja räkna
    if (running && !paused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Räkna upp varje millisekund
      }, 10); // Uppdatera varje 10 millisekund (100 millisekunder per sekund)
      setStatus("Timer is running");
      setStatusClass("timer-running");

      // Rensa status efter 3 sekunder
      setTimeout(() => {
        setStatus(""); // Rensa status
        setStatusClass(""); // Rensa statusklass
      }, 3000);
    } else if (paused) {
      setStatus("Timer is paused");
      setStatusClass("timer-paused");
      clearInterval(interval); // Stoppar timern när den är pausad
    } else {
      setStatus(""); // Ingen status när timern är stoppad
      setStatusClass("timer-stopped");
      clearInterval(interval); // Stoppar timern när den är stoppad
    }

    return () => clearInterval(interval); // Rensar intervallet när timern stoppas
  }, [running, paused]);

  const handleStart = () => {
    setRunning(true); // Starta timern
    setPaused(false); // Pausa till false
  };

  const handlePause = () => {
    setPaused(true); // Sätt paus till true
  };

  const handleRestart = () => {
    setTime(0); // Återställ tid till 0
    setRunning(false); // Stoppa timern
    setPaused(false); // Sätt paus till false
    setStatus(""); // Rensa status
    setStatusClass(""); // Rensa statusklass
  };

  return (
    <>
      <h1 className="timer-title">STOP WATCH</h1>
      <TimerCard
        time={time}
        status={status}
        statusClass={statusClass}
        onStart={handleStart}
        onPause={handlePause}
        onRestart={handleRestart}
        running={running}
        paused={paused}
      />
    </>
  );
}

export default App;
