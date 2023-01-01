import { decode } from "html-entities"
import React, { useState, useEffect } from 'react';
import Answers from './Answers';

export default function Question(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [rightOption, setRightOption] = useState(props.answer);
  const wrongOptions = props.wrongAnswers;
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    const shuffledAnswers = [rightOption, ...Object.values(wrongOptions)];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    setAllAnswers(shuffledAnswers);
  }, [rightOption, wrongOptions]);

  const generateAllAnswers = allAnswers.map((answer, index) => {
    return (
      <Answers
        key={index}
        value={decode(answer)}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        rightOption={rightOption}
        checkAnswer = {props.checkAnswer}
      />
    );
  });



  return (
    <div className="question">
      <div className="question-container">
        <h2>{decode(props.question)}</h2>
      </div>
      <div className="answers-container">
        {generateAllAnswers}
      </div>
      <hr></hr>
    </div>
  );
}
