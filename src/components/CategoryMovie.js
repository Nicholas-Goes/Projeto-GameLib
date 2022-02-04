import React from 'react';
import './CategoryMovie.css'

export default () => {
    return (
        <div className='category'>
            <div className='category--title'>
                <h2>Categoria</h2>
                <a href='#'>Ver mais</a>
            </div> 

            <div className='category--list'>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>😎</h1>
                    </div>
                    <h3>Ação</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>🤣</h1>
                    </div>
                    <h3>Comédia</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>😱</h1>
                    </div>
                    <h3>Terror</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>😍</h1>
                    </div>
                    <h3>Romance</h3>
                </div>
            </div>
        </div>      
    );
}