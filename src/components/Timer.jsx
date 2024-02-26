import './Timer.css'
import data from '../data/data'
import { useState, useEffect, useContext } from 'react';
import { AnimalContext } from '../context/AnimalProvider';
import GameModals from './GameModals';
import Button from './Button';

const Timer = () => {
  const [timer, setTimer] = useState("00:00");
  const [timerExpired, setTimerExpired] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [score, won] = useContext(AnimalContext)

  const getTime = (startTime) => {
    const seconds = 60;
    const minutes = 5;
    let time = Math.floor(Date.now() / 1000)
    let secondsPassed = time - startTime

    let num = (secondsPassed % seconds).toString();
    while (num.length < 2) num = "0" + num;

    setTimer(`0${Math.floor(secondsPassed / seconds)}:${num}`)
    if (won) {
      setTimer("00:00")
      setTimerExpired(true);
    } else if (secondsPassed > minutes * seconds) {
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
  }, [timerExpired, getTime]);

  return (
    <div className="timer">
        <h1 className="timer__text">{timer}</h1>   
        <GameModals isModalOpen={isModalOpen}>
            <h2>You scored {score}/{data.length}!</h2>
            <div className="mt-50" onClick={() => {window.location.reload(false)}}>
              <Button>Play Again?</Button>
            </div>
        </GameModals>
    </div>
  );
};

export default Timer;