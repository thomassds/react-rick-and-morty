import React, { useContext, useEffect, useState } from 'react';

import Header from '../../Component/Header';
import DetailBox from '../../Component/DetailBox';

import { Context } from '../../context/AuthContext';

import './styles.css'

export default function Detail() {
    const { character } = useContext(Context);

    return(
        <div className='container-detail'>
            <Header/>

            <section className='section-infos-detail'>
                <DetailBox/>
            </section>  
        </div>
    ) 
}