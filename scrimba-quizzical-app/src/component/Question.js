import React, { useState } from "react";
import Answers from "./Answers";

export default function Question(props) {
  const rightOption = props.answer;
  const wrongOptions = props.wrongAnswers;
  const allAnswers = [rightOption, ...Object.values(wrongOptions)]
  const [activeAnswer, setActiveAnswer] = useState(false)

  allAnswers.sort(() => Math.random() - 0.5);
  // console.log(rightOption)
  console.log(allAnswers)
  const generateAllAnswers = allAnswers.map((answer, index) => {
    return (
      <Answers
        key = {index}
        value = {answer}
      />
    );
  });


  return (
    <div className="question">
      <div className="question-container">
        <h2>{props.question}</h2>
      </div>
      <div className="answers-container">
        {generateAllAnswers}
      </div>
      <hr></hr>
    </div>
  );
}
