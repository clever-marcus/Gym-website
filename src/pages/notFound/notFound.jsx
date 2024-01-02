import React from 'react';
import './notFound.css';
import {Link} from 'react-router-dom';
import {AiOutlineCaretLeft} from 'react-icons/ai'

const NotFound = () => {
  return (
    <section>
      <div className='container notfound__container'>
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>
          <AiOutlineCaretLeft style={{ fontSize: '2.2rem', paddingTop: '20px'}}/>
          Home</Link>
      </div>
    </section>
  )
}

export default NotFound;