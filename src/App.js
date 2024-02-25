import './App.css';
import { useState, useEffect, useRef } from 'react';
import Animal from "./components/Animal";
import data from './data/data';
import Forest from './assets/forest.jpg';
import AudioIcon from './components/AudioIcon';
import NoAudioIcon from './components/NoAudioIcon';
import Audio from './audio/birds.mp3'

function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const animals = data.map((item, index) => {
    return <Animal 
      key={index}
      setScore={setScore}
      title={item.title}
      textDescription={item.textDescription}
      image={item.image}
      animalClass={item.animalClass}
      imageClass={item.imageClass}
  />
  });

  const playAudio = () => {
    console.log(audioRef)
    setIsPlaying(true)
  }

  const stopAudio = () => {
    setIsPlaying(false)
  }

  return (
    <div className="background">
      <img src={Forest} className="background-image" alt="forest"></img>
      {isPlaying ? 
        <div className="background__audio-icon" onClick={stopAudio}>
          <AudioIcon />
        </div> : 
        <div className="background__audio-icon" onClick={playAudio}>
          <NoAudioIcon />
        </div>
      }
      <audio src={Audio} ref={audioRef} />
      <h2 className="background__score">Score: {score}/5</h2>
      {animals}
    </div>
  );
}

export default App;
