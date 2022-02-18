import React, { useContext } from 'react';

import { Context } from '../../context/AuthContext';

import './styles.css';

export default function Card({ data }) {
    const { handleSelectCharacterDetail } = useContext(Context);
    const { image, name, status, gender, species } = data;

    return(
        <div className='container-card' onClick={() => handleSelectCharacterDetail(data)}>
            <div className='div-image-card'>
                <img className="image-card" src={image}/>
            </div>

            <div className='div-infos-card'>
                <div className='div-info-card'>
                    <strong className='name-info-card'>{name}</strong>
                </div>

                <div className='div-info-card'>
                    <p className='status-info-card'>{status}</p>
                </div>

                <div className='div-info-card'>
                    <p className='species-info-card'>{gender}</p>
                </div>

                <div className='div-info-card'>
                    <p className='species-info-card'>{species}</p>
                </div>
            </div>
        </div>
 
    ) 
}