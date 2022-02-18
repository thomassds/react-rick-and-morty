import React, { useContext, useEffect, useState } from 'react';

import Header from '../../Component/Header';
import Card from '../../Component/Card';

import { Context } from '../../context/AuthContext';

import './styles.css'
export default function Home() {
    const { characters, handleGetCharacters, handleSearchCharactersName, pagination, setPagination } = useContext(Context);

    const [ search, setSearch ] = useState("");
    
    useEffect(() => {
        setPagination(1);
        handleGetCharacters();
    }, [])

    useEffect(() => {
        handleSearchCharactersName(search);
    
    }, [search])
    return(
        <div className='container-home'>
            <Header/>

            <section className='section-cards-home'>
                <div className='div-search-home'>
                    <input className='input-search-home' placeholder='Pesquisa por nome:' value={search} onChange={e => setSearch(e.target.value)}/>

                    <select className='select-search-home' onClick={e =>  setPagination(parseInt(e.target.value) < 1 ? 1 : parseInt(e.target.value))}>
                        <option value={pagination <= 2 ? 1 : pagination - 2}>{pagination <= 2 ? 1 : pagination - 2}</option>
                        <option value={pagination <= 2 ? 2 : pagination - 1}>{pagination <= 2 ? 2 : pagination - 1}</option>
                        <option value={pagination <= 2 ? 3 : pagination}>{pagination <= 2 ? 3 : pagination}</option>
                        <option value={pagination <= 2 ? 4 : pagination + 1}>{pagination <= 2 ? 4 : pagination + 1}</option>
                        <option value={pagination <= 2 ? 5 : pagination + 2}>{pagination <= 2 ? 5 : pagination + 2}</option>
                    </select>
                </div>

                <div className='div-cards-home'>
                    {
                        characters.map(character => 
                            <Card data={character}/>    
                        )
                    }
                </div>
            </section>  
        </div>
    ) 
}