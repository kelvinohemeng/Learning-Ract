import React, { useState } from "react";

export default function Question(props) {
  const rightOption = props.answer;
  const wrongOptions = props.wrongAnswers;
  const [innerState, setInnerState] = useState(true);

  const chooseAns = () => {
    setInnerState(prevInner => !prevInner);
  };

  const generateWrongAnswers = wrongOptions.map((wrong, index) => {

    return (
      <button
        key={index}
        style={{
          background: !innerState ? "#D6DBF5" : "transparent",
        }}
        onClick={chooseAns}
      >
        {wrong}
      </button>
    );
  });

  return (
    <div className="question">
      <div className="question-container">
        <h2>{props.question}</h2>
      </div>
      <div className="answers-container">
        {generateWrongAnswers}
      </div>
      <hr></hr>
    </div>
  );
}
