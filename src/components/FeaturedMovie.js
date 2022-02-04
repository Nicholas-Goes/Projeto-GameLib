import React from 'react';
import './FeaturedMovie.css'

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--vertical2'>
                <div className='featured--name'>
                        {item.original_name}
                    </div>
                    <div className='featured--info'>
                        <div className='featured--points'>
                            {item.vote_average} Pontos
                        </div>
                        <div className='featured--year'>
                            {firstDate.getFullYear()}
                        </div>
                        <div className='featured--seasons'>
                            {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className='featured--buttons'>
                        <div className='featured--mylist'>
                            <p>Minha Lista</p>
                        </div>
                        <div className='featured--play'>
                            <p>► Play</p>
                        </div>   
                      
                    </div>
                </div>
            </div>
        </section>
    );
}

