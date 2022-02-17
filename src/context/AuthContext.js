import React, { createContext, useEffet, useState } from 'react';

import useCharaters from './hooks/useCharaters';

const Context = createContext();

function AuthProvider({children})  {

    const { 
        character, setCharacter,
        characters, setCharacters,
        pagination, setPagination,
        handleGetCharacters 
    } = useCharaters();

    return (    
        <Context.Provider value={{
            character, setCharacter, characters, setCharacters, pagination, setPagination, handleGetCharacters
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider }