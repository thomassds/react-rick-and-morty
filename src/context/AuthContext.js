import React, { createContext, useEffet, useState } from 'react';

import useCharaters from './hooks/useCharaters';

const Context = createContext();

function AuthProvider({children})  {

    const { 
        character, setCharacter,
        characters, setCharacters,
        pagination, setPagination,
        handleGetCharacters, handleSelectCharacterDetail,
        handleGetCharacterId, handleSearchCharactersName
    } = useCharaters();

    return (    
        <Context.Provider value={{
            character, setCharacter, characters, setCharacters, pagination, setPagination, 
            handleGetCharacters, handleSelectCharacterDetail, handleGetCharacterId, handleSearchCharactersName
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider }