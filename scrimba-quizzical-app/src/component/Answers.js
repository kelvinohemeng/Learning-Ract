import React, {useState} from 'react'

export default function Answers (props) {
    const [activeAnswer, setActiveAnswer] = useState(false)

    function handleClick() {
        setActiveAnswer(!activeAnswer)
    }

    return (
        <button 
            onClick={handleClick}
            className={!activeAnswer ? 'answers-btn-default' : 'answers-btn'}
        >
            {props.value}
        </button>
    )
}