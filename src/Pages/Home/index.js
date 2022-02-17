import React, { useContext, useEffect, useState } from 'react';

import Header from '../../Component/Header';
import Card from '../../Component/Card';

import { Context } from '../../context/AuthContext';

import './styles.css'
export default function Home() {
    const { characters, handleGetCharacters } = useContext(Context);


    useEffect(() => {
        handleGetCharacters();
    }, [])
    return(
        <div className='container-home'>
            <Header/>

            <section className='section-cards-home'>
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