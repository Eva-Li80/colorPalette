import React, { useState } from 'react'
import Head from '../Components/Head'
import Naven from '../Components/Naven'
import AdminCard from '../Components/AdminCard'

const Admin = () => {

  return (
    <div>
      <Head title='Admin sidan' subtitle='Här kan du välja och fixa med dina färger' />
      <Naven />
      <AdminCard />
    </div>
  )
}

export default Admin
