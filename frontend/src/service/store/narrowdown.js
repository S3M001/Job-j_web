import { useState, createContext, useContext } from 'react'

const NarrowdownContext = createContext(null)

export const NarrowdownProvider = ({ children }) => {
    const [stones, setStones] = useState([]);
    

    const chengestones = (stones) => {
        setStones(stones)
    }

    return (
        <NarrowdownContext.Provider value={{ stones, chengestones}}>
            {children}
        </NarrowdownContext.Provider>
    )
}

export const NarrowdownAuth = () => {
    return useContext(NarrowdownContext)
}
