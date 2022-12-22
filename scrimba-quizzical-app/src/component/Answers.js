import React, { useState } from 'react';

export default function Answers(props) {
  const { value, selectedAnswer, setSelectedAnswer, checkAnswer} = props;  // added this line

  function handleClick() {
    setSelectedAnswer(value);
  }

  return (
    <button
      onClick={handleClick}
      className={selectedAnswer === value ? 'answers-btn' : 'answers-btn-default'}
      style={{
        backgroundColor:
            checkAnswer && value === props.rightOption ? '#94D7A2' : '',
        color:
            checkAnswer && value === props.rightOption ? "#000000" : '',
      }}
    >
      {value}
    </button>
  );
}
