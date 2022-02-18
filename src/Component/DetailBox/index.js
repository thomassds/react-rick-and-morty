import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Context } from '../../context/AuthContext';
import history from '../../routes/history';

import './styles.css';

export default function DetailBox() {
    const { handleGetCharacterId, character: { id, image, name, status, gender, species, origin, location, url }, handleSelectCharacterDetail } = useContext(Context);
    
    const { id_character } = useParams();

    const [ originName, setOriginName ] = useState();
    const [ locationName, setLocationName ] = useState();

    useEffect(() => {
        if(!id) {
            handleGetCharacterId(id_character);
        }
    }, []);
    
    useEffect(() => {
        if(id) {
            setLocationName(location.name);
            setOriginName(origin.name);
        }
        
    }, [location]);
    return(
        <div className='container-detailBox'>
            <div className='div-image-detailBox'>
                <img className="image-detailBox" src={image}/>
            </div>

            <div className='div-infos-detailBox'>
                <div className='div-list-infos-detailBox'>
                    <div className='div-info-detailBox'>
                        <p>Name:</p>
                        <strong className='info-detailBox'>{name}</strong>
                    </div>

                    <div className='div-info-detailBox'>
                        <p>Gender:</p>
                        <strong className='info-detailBox'>{gender}</strong>
                    </div>

                    <div className='div-info-detailBox'>
                        <p>Specie:</p>
                        <strong className='info-detailBox'>{species}</strong>
                    </div>

                    <div className='div-info-detailBox'>
                        <p>Status:</p>
                        <strong className='info-detailBox'>{status}</strong>
                    </div>  

                    <div className='div-info-detailBox'>
                        <p>Origin:</p>
                        <strong className='info-detailBox'>{originName}</strong>
                    </div>  
                </div>
                
                <div className='div-list-infos-detailBox'>
                    <div className='div-info-detailBox'>
                        <p>Location:</p>
                        <strong className='info-detailBox'>{locationName}</strong>
                    </div>    

                    <div className='div-info-detailBox'>
                        <p>Url:</p>
                        <a href={url} className='info-detailBox'>{url}</a>
                    </div>    
                </div>     
            </div>
        </div>
 
    ) 
}