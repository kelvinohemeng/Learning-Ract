import React from 'react'
import Me from '../assets/Images/Card-image-full.jpg'
import TopIcon from '../assets/Icons/Mail.svg'

function Top() {
    return (
        <div className='top-container'>
            <div className='the-image'>
                <img src={Me} alt='' />
            </div>
            <div className='name-others'>
                <h1>Kelvin</h1>
                <span>UI Developer</span>
            </div>
            <div className='links-btn'>
                <a href='#'>Portfolio Website</a>
                <a href='mailto:kelvinohemeng59@gmail.com' target={"_blank"}>
                    <button className='cta1'>
                        <img src={TopIcon} alt="" />
                        Email
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Top;