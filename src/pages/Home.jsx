import React from 'react'
import HomeHeader from '../features/Home/HomeHeader'
import Landing from '../features/Home/Landing'

function Home() {
  return (
    <div className='h-screen bg-secondary-0'>
      <HomeHeader/>
      <Landing/>
    </div>
  )
}

export default Home