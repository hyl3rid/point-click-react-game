import './Timer.css'
import data from '../data/data'
import { useState, useEffect, useRef, useContext } from 'react';
import { AnimalContext } from '../context/AnimalProvider';
import GameModals from './GameModals';

const Timer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(60);
  const [timer, setTimer] = useState("00:00");
  const [timerExpired, setTimerExpired] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [score] = useContext(AnimalContext)

  const getTime = (startTime) => {
    let time = Math.floor(Date.now() / 1000)
    let secondsPassed = time - startTime

    let num = (secondsPassed % seconds).toString();
    while (num.length < 2) num = "0" + num;

    setTimer(`0${Math.floor(secondsPassed / 60)}:${num}`)
    if (secondsPassed > minutes * seconds) {
        setTimerExpired(true);
        setTimer("00:00")
        setIsModalOpen(true)
    } else {
        setTimerExpired(false);
        setIsModalOpen(false)
    }
  };

  useEffect(() => {
    const startTime = Math.floor(Date.now() / 1000)
    const interval = setInterval(() => {
        if (!timerExpired) {
            getTime(startTime)
        }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
        <h1>{timer}</h1>   
        <GameModals isModalOpen={isModalOpen}>
            <h2>You scored {score}/{data.length}!</h2>
            <button className="end-game-modal__play-again" onClick={() => {window.location.reload(false)}}>Play Again?</button>
        </GameModals>
    </div>
  );
};

export default Timer;