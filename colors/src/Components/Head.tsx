import React from 'react'

type HeadProps = {
    title: string;
}

const Head = ({title}: HeadProps) => {
  return (
    <div className='head'>
        <h1 className="title">{title}</h1>    
    </div>
  )
}

export default Head
