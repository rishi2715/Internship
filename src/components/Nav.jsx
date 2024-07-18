import logo from '../assets/icon.png'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './nav.css'
function Nav() {
    const navigate=useNavigate('')
    return(
        <div class="header">
        <div class="nav">
            <div class="icon">
                <img src={logo} alt="logo"/>
            </div>
            <div class="content">
                <li onClick={()=> navigate('/')} >HOME</li>
                <li onClick={()=> navigate('/about')} >ABOUT</li>
                <li onClick={()=> navigate('/events')} >EVENTS</li>
                <li onClick={()=> navigate('/gallery')} >GALLERY</li>
                <li onClick={()=> navigate('/contact')} >CONTACT</li>
            </div>
            <div class="button">
                <button>Sign In</button>
            </div>
        </div>
    </div>
    );
}

export default Nav