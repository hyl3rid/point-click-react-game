import { createContext, useState } from 'react';

const AnimalContext = createContext(undefined);
const AnimalDispatchContext = createContext(undefined);

const AnimalProvider = ({children}) => {
    const [score, setScore] = useState(0);
    
    return (
        <AnimalContext.Provider value={[
            score, 
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