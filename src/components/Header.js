import React from 'react';
import './Header.css';

export default ({black}) => {
  return (
      <header className={black ? 'black' : ''}>
          <div className='header--logo'>
              <a href='/'>
                  <img src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png' alt='Logo'/>
              </a>
          </div>
          <div className='header--user'>
              <a href='/'>
                  <img className='header--search' src='https://cdn3.iconfinder.com/data/icons/flaticons-1/24/flaticon_search-512.png' alt="search"/>
              </a>
              <a href='/'>
                  <img src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt="user"/>
              </a>
          </div>
      </header>
  );
}
