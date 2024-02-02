import React from 'react'

type FootProps = {
    title: string;
}

const Foot = ({title}:FootProps) => {
  return (
    <div className='foot_container'>
      <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Foot
