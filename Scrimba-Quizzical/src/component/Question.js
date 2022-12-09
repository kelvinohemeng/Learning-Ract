import React from "react";

export default function Question(props) {
//   const [innerState, setInnerState] = React.useState(true);
  const rightOption = props.answer;
  const wrongOptions = props.wrongAnswers;
  const generateWrongAnswers = wrongOptions.map((wrong, index) => {
    return (
      <button
        key={index}
        style={{
          background: props.state ? "#D6DBF5" : "transparent",
        }}
        onClick={props.holdAns}
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
        <button
          style={{ background: props.state ? "#D6DBF5" : "transparent" }}
          onClick={props.holdAns}
        >
          {rightOption}
        </button>
        {generateWrongAnswers}
      </div>
      <hr></hr>
    </div>
)
}
