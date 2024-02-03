import React from 'react'
import Head from '../Components/Head'
import Naven from '../Components/Naven'
import FetchColors from '../Components/FetchColors'

const Home = () => {
  return (
    <div>
      <Head title='Home' />
      <Naven />
      <FetchColors/>
    </div>
  )
}

export default Home
