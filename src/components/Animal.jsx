import './Animal.css';
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

function Animal({ title, textDescription, image, animalClass, imageClass, setScore }) {
  const [found, setFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onClose, setOnClose] = useState(true);
  const relativeElementRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [rect, setRect] = useState();

  const openModal = () => {
    setIsOpen(true);
    setOnClose(false)
    setRect(relativeElementRef.current.getBoundingClientRect())
  }

  useEffect(() => {
    if (isOpen === false && found) {
      wrapperRef.current.className += " hide"
    }
  }, [isOpen, found])

  useEffect(() => {
    const animalsAppear = () => {
      setTimeout(() => {
        relativeElementRef.current.className += " show";
      }, 2000)
    }
    
    window.addEventListener("load", animalsAppear)
      
    return () => {
        window.removeEventListener("load", animalsAppear)
    }
  }, [relativeElementRef])

  return (
    <>      
      <section 
        className={animalClass} 
        ref={wrapperRef}
      >
        <div className="animal-container" ref={relativeElementRef}>
          <Modal
              title={title}
              textDescription={textDescription}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setFound={setFound}
              onClose={onClose}
              relativeRectRef={rect}
              imageRef={imageRef}
              setScore={setScore}
          />
          <img 
            ref={imageRef}
            src={image} 
            className={imageClass} 
            alt="Deer" 
            onClick={openModal}
            ></img>
        </div>
      </section>
    </>
  );
}

export default Animal;
