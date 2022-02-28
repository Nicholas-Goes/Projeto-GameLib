import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title, items}) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let ListW = items.results.length * 200
    if((window.innerWidth - ListW) > x) {
      x = (window.innerWidth - ListW) - 60;
    }
    setScrollX(x);    
  }

  return (
      <div className='movieRow'>
        <div className='movieRow--title'>
          <h2>{title}</h2>
          <a href='#'>Ver Mais</a>
        </div>
        <div className='movieRow--left' onClick={handleLeftArrow}>
            <NavigateBeforeIcon style={{fontSize: 50}}/>
          </div>
          <div className='movieRow--right' onClick={handleRightArrow}>
            <NavigateNextIcon style={{fontSize: 50}}/>
        </div>
          <div className='movieRow--listarea'>

              <div className='movieRow--list' style={{
                marginLeft: scrollX,
                width: items.results.length * 250,
              }}>
                {items.results.length > 0 && items.results.map((item, key) =>(
                  <div key={key} className='movieRow--item'>
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>                  
                  </div>
                ))}
              </div>
          </div>
      </div>
  );
}

