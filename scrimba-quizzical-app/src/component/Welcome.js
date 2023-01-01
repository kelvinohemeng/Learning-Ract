import React from 'react'

export default function Question (props){
    
    return (
        <div className='welcome-screen'>
            <div>
                <h1>Quizzical</h1>
                <p>Click the button below to start game</p>
            </div>
            <button onClick={props.handelLoad}>Start quiz</button>
        </div>
    )
}