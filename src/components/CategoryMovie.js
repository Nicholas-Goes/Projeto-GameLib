import React from 'react';
import './CategoryMovie.css'

function CategoryMovie() {
    return (
        <div className='category'>
            <div className='category--title'>
                <h2>Categoria</h2>
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
                        <h1>😍</h1>
                    </div>
                    <h3>Romance</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>😭</h1>
                    </div>
                    <h3>Drama</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>😱</h1>
                    </div>
                    <h3>Terror</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>🧐</h1>
                    </div>
                    <h3>Mistério</h3>
                </div>
                <div className='category--card'>
                    <div className='card--content'>
                        <h1>📚</h1>
                    </div>
                    <h3>Histórico</h3>
                </div>
            </div>
        </div>      
    );
}

export default CategoryMovie