import React, { useState } from "react";
import Answers from "./Answers";

export default function Question(props) {
  const rightOption = props.answer;
  const wrongOptions = props.wrongAnswers;

  const [activeAnswer, setActiveAnswer] = useState(false)

  function handleClick() {
      setActiveAnswer(!activeAnswer)
  }
  const generateWrongAnswers = wrongOptions.map((wrong, index) => {
    return (
      <Answers
        key = {index}
        value = {wrong}
      />
    );
  });


  return (
    <div className="question">
      <div className="question-container">
        <h2>{props.question}</h2>
      </div>
      <div className="answers-container">
        <button 
            onClick={handleClick}
            className={!activeAnswer ? 'answers-btn-default' : 'answers-btn'}
        >
            {rightOption}
        </button>
        {generateWrongAnswers}

      </div>
      <hr></hr>
    </div>
  );
}
