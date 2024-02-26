import './App.css';
import { useState, useEffect, useRef, useContext } from 'react';
import Animal from "./components/Animal";
import data from './data/data';
import Forest from './assets/forest.jpg';
import AudioIcon from './components/AudioIcon';
import NoAudioIcon from './components/NoAudioIcon';
import QuestionMarkIcon from './components/QuestionMarkIcon';
import GameModals from './components/GameModals';
import Timer from './components/Timer';
import Audio from './audio/birds.mp3'
import { AnimalContext } from './context/AnimalProvider';

function App() {
  const [score] = useContext(AnimalContext)
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const animals = data.map((item, index) => {
    return (
        <Animal 
          key={index}
          title={item.title}
          textDescription={item.textDescription}
          image={item.image}
          animalClass={item.animalClass}
          imageClass={item.imageClass}
        />
    )
  });

  const playAudio = () => {
    setIsPlaying(true)
  }

  const stopAudio = () => {
    setIsPlaying(false)
  }

  const openHelp = () => {
    setIsModalOpen(true)
  }

  const closeHelp = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="background">
      <img src={Forest} className="background-image" alt="forest"></img>

      <Timer />

      {isPlaying ? 
        <div className="background__audio-icon" onClick={stopAudio}>
          <AudioIcon />
        </div> : 
        <div className="background__audio-icon" onClick={playAudio}>
          <NoAudioIcon />
        </div>
      }

        <div className="background__help-icon" onClick={openHelp}>
          <QuestionMarkIcon />
        </div>

      <GameModals isModalOpen={isModalOpen}>
        <h2>Instructions to play the game!</h2>
        <p>Just click on things you find interesting in the scene and find out information about them.</p>
        <button className="background__button" onClick={closeHelp}>Continue</button>
      </GameModals>

      <audio src={Audio} ref={audioRef} />

      <h2 className="background__score">Score: {score}/{data.length}</h2>

      {animals}
    </div>
  );
}

export default App;
