import React from 'react'
import BackImg from '../assets/Images/greenish-gradient-blur.png'

export default function Body() {
    return (
        <div className='body-container'>
            <div className='first'>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with current trends and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className='second'>
                <h3>Interest</h3>
                <p>Sport(Basketball)t. Music scholar. Love Competitive video games. Internet fanatic. Designing creative thigs. Music. The motivation to come with new ideas.</p>
            </div>
            <img className='back-drop' src={BackImg} alt="" />
        </div>
    )
}