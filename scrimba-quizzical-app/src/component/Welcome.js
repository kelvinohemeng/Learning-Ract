import React from 'react'

export default function Question (props){
    
    return (
        <div className='welcome-screen'>
            <svg className='down' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#DEEBF8" d="M47,-20.7C60.1,-4.5,69.3,20.4,60.8,39.2C52.4,57.9,26.2,70.4,2,69.3C-22.3,68.2,-44.5,53.4,-56.5,32.6C-68.5,11.8,-70.3,-14.9,-59.1,-29.9C-48,-45,-24,-48.5,-3.5,-46.4C16.9,-44.4,33.9,-36.9,47,-20.7Z" transform="translate(100 100)" />
            </svg>
            <svg className='up' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFAD1" d="M47,-20.7C60.1,-4.5,69.3,20.4,60.8,39.2C52.4,57.9,26.2,70.4,2,69.3C-22.3,68.2,-44.5,53.4,-56.5,32.6C-68.5,11.8,-70.3,-14.9,-59.1,-29.9C-48,-45,-24,-48.5,-3.5,-46.4C16.9,-44.4,33.9,-36.9,47,-20.7Z" transform="translate(100 100)" />
            </svg>
            <div>
                <h1>Quizzical</h1>
                <p>Click the button below to start game</p>
            </div>
            <button onClick={props.handelLoad}>Start quiz</button>
        </div>
    )
}