import React from 'react'
import Card from '../Components/Card'
import Head from '../Components/Head'
import Naven from '../Components/Naven'

const Admin = () => {
  return (
    <div>
      <Head title='Admin sidan' subtitle='Här kan du välja och fixa med dina färger' />
      <Naven />
      <Card />
    </div>
  )
}

export default Admin
