import React from 'react'
import moun from '../assets/mountain.jpeg'
import Footer from './Footer'
import Party from '../assets/party.jpeg'
import Navratri from '../assets/navratri.jpeg'
import Standup from '../assets/standup.jpeg'
import Bday from '../assets/birthday.jpeg'
import Wedding from '../assets/wedding.jpeg'
import './Events.css'
export default function Events() {
  return (
    <div>
      <div className="first">
        <img src={moun} alt="mountain" />
      </div>
      <div className="evimg">
        <div className='ev a'>
          <img src={Party} alt="" />
          <p>Party</p>
        </div>
        <div className='ev a'>
          <img src={Navratri} alt="" />
          <p>Navratri</p>
        </div>
        <div className='ev a'>
          <img src={Standup} alt="" />
          <p>Standup Comedy</p>
        </div>
        <div className='ev'>
          <img src={Bday} alt="" />
          <p>Birthday</p>
        </div>
        <div className='ev'>
          <img src={Wedding} alt="" />
          <p>Wedding</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
