import './Timer.css'
import data from '../data/data'
import { useState, useEffect, useRef, useContext } from 'react';
import { AnimalContext } from '../context/AnimalProvider';

const GameModals = ({isModalOpen, children}) => {

  const endGameRef = useRef(null);

  useEffect(() => {
    const modalElement = endGameRef.current;
    if (modalElement) {
        console.log(isModalOpen)
        if (isModalOpen) {
        modalElement.showModal();
        } else {
        modalElement.close();
        }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={endGameRef} className="end-game-modal">
        {children}
    </dialog> 
  );
};

export default GameModals;