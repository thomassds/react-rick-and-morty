import React, { useState, useEffect } from 'react';

import  { api } from '../../services/api';
import history from '../../routes/history';

export default function useCharaters() {
    const [ characters, setCharacters ] = useState([]);
    const [ character, setCharacter ] = useState({});

    const [ pagination, setPagination ] = useState(1);

    async function handleGetCharacters() {
        try {
            const { data } = await api.get( `/character/?page=${pagination}`);

            setCharacters(data.results);
        } catch (error) {
            alert('Porfavor tente novamente');
        }
    }

    async function handleGetCharacterId(id) {
        try {
            const { data } = await api.get( `/character/${id}`);

            setCharacter(data);
        } catch (error) {
            alert('Porfavor tente novamente');
        }
    }

    function handleSelectCharacterDetail(data) {
        setCharacter(data);
        history.push(`/character/${data.id}/detail`);
    }

    async function handleSearchCharactersName(name) {
        try {
            const { data } = await api.get( `/character/?name=${name}`);

            setCharacters(data.results);
        } catch (error) {
            setCharacters([]);
        }
    }
    
    useEffect(() => {
        handleGetCharacters();

    }, [pagination]);

    return { character, setCharacter, characters, setCharacters, pagination, setPagination, handleGetCharacters, handleSelectCharacterDetail, handleGetCharacterId, handleSearchCharactersName };
}