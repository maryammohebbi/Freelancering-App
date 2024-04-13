import React from 'react'
import HomeHeader from '../features/Home/HomeHeader'
import Landing from '../features/Home/Landing'
import backgroundImage from '/bghome.jpg'


function Home() {
  return (
    <div className='w-full h-screen ' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <HomeHeader/>
      <Landing/>
    </div>
  )
}

export default Home