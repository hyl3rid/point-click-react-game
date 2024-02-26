import './GameModals.css'

import {  useEffect, useRef } from 'react';

const GameModals = ({isModalOpen, children}) => {

  const endGameRef = useRef(null);

  useEffect(() => {
    const modalElement = endGameRef.current;
    if (modalElement) {
        if (isModalOpen) {
        modalElement.showModal();
        } else {
        modalElement.close();
        }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={endGameRef} className="game-modal">
        {children}
    </dialog> 
  );
};

export default GameModals;