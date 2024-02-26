import { createContext, useState } from 'react';

const AnimalContext = createContext(undefined);
const AnimalDispatchContext = createContext(undefined);

const AnimalProvider = ({children}) => {
    const [score, setScore] = useState(0);
    const [won, setWon] = useState(false)
    
    return (
        <AnimalContext.Provider value={[
            score, 
            won,
            setWon,
        ]}>
            <AnimalDispatchContext.Provider value={[
                setScore, 
            ]}>
                {children}
            </AnimalDispatchContext.Provider>
        </AnimalContext.Provider>
    )
}

export { AnimalProvider, AnimalContext, AnimalDispatchContext }