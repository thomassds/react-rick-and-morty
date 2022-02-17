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

    return { character, setCharacter, characters, setCharacters, pagination, setPagination, handleGetCharacters };
}