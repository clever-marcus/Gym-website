import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#90DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Eum, cum ex impedit nihil 
            iste laboriosam!
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>

        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={headerImg} alt='Main Header' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader