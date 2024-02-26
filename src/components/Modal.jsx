import './Modal.css';
import { useState, useEffect, useRef, useContext } from "react";
import { AnimalDispatchContext } from '../context/AnimalProvider';

const Modal = ({ 
        title, 
        textDescription, 
        isOpen, 
        setIsOpen, 
        setFound, 
        onClose, 
        relativeRectRef, 
        imageRef,
        children }) => {

    const [setScore] = useContext(AnimalDispatchContext)
    const modalRef = useRef(null);
    const windowHeight = useRef(window.innerHeight);
    const windowWidth = useRef(window.innerWidth);
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (e.target !== modalRef.current && e.target !== imageRef.current) {
                modalRef.current.close();
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        }

        document.addEventListener("click", checkIfClickedOutside)
        
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [onClose, isModalOpen, imageRef, setIsOpen])

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen])

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
          if (isModalOpen) {
            modalElement.showModal();
          } else {
            modalElement.close();
          }
        }
      }, [isModalOpen]);

    const handleCloseModal = (found = false) => {
        setIsOpen(false);
        if (found) {
            setFound(true);
            setScore((prev)=> prev + 1)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    }

    return (
        <div className="dialog-wrapper">
            <dialog 
                ref={modalRef} 
                onKeyDown={handleKeyDown} 
                className="modal"
                style={{
                    position: 'fixed',
                    top: `${windowHeight.current < relativeRectRef?.top + 250 ? relativeRectRef?.top - 225 : relativeRectRef?.top + 100 }px`,
                    left: `${relativeRectRef?.left - 70}px`,
                }}
            >
                <h4 className="modal__title">{ title }</h4>
                <p className="modal__text">{ textDescription }</p>
                <button className="modal-close-btn" onClick={handleCloseModal}>
                    Continue
                </button>
                {children}
            </dialog>
        </div>
    );
    }

export default Modal;