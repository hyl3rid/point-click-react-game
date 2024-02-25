import './Animal.css';
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

function Animal({ title, textDescription, image, animalClass, imageClass }) {
  const [found, setFound] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  const [onClose, setOnClose] = useState(true);
  const [rect, setRect] = useState();

  const relativeElementRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
    setOnClose(false)
    setRect(relativeElementRef.current?.getBoundingClientRect())
  }

  useEffect(() => {
    if (isOpen === false && found) {
      wrapperRef.current.className += " hide";
    }
  }, [isOpen, found])

  useEffect(() => {
    const animalsAppear = () => {
      setTimeout(() => {
        relativeElementRef.current.className += " show" ;
      }, 2000)
    }
      window.addEventListener("load", animalsAppear)
        
      return () => {
          window.removeEventListener("load", animalsAppear)
      }
  }, [])

  return (
    <>    
      <section 
        className={animalClass} 
        ref={wrapperRef}
      >
        <div className={`animal-container`} ref={relativeElementRef}>
          <Modal
              title={title}
              textDescription={textDescription}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setFound={setFound}
              onClose={onClose}
              relativeRectRef={rect}
              imageRef={imageRef}
              relativeElementRef={relativeElementRef}
          />
          <img 
            ref={imageRef}
            src={image} 
            className={imageClass} 
            alt={title} 
            onClick={openModal}
            ></img>
        </div>
      </section>
    </>
  );
}

export default Animal;
