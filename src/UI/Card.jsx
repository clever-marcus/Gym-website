import React from 'react'

// This Card component works the same as the React Fragment
const Card = ({ className, children }) => {
  return (
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default Card