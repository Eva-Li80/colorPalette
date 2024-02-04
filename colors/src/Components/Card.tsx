import React from 'react'
import TextCard from './TextCard'
import Button from './Button'

const Card = () => {
  return (
    <div>
        <TextCard title='Hej admin' text='Välj ett av alternativen'/>
        <Button text='Uppdatera färg' onClick={()=>alert('Button clicked')}/>
        <Button text='Lägga till färg' onClick={()=>alert('Button clicked')}/>
        <Button text='Ta bort färg' onClick={()=>alert('Button clicked')}/>
      
    </div>
  )
}

export default Card
