import React from  'react'
import Welcome from "./component/Welcome"
import Question from './component/Question'
import { nanoid } from 'nanoid'
import './App.css';

export default function App() {
  const [questionsData, setQuestionData] = React.useState([])
  // const [questions, setQuestions] = React.useState(newQuestionData())
  const [gameState, setGameState] = React.useState(false)
  const [checkAnswer, setCheckAnswer] = React.useState(false)

  React.useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setQuestionData(data.results))
    }, [])
    
    

    
    const theQuestion = questionsData.map((question) => {
      question.id = nanoid()
      question.state = true
      return (
        <Question 
            key = {question.id}
            question={question.question}
            answer = {question.correct_answer}
            wrongAnswers = {question.incorrect_answers}
            hasChoosen = {question.state}
            checkAnswer = {checkAnswer}
        />
        )
      })

      
    function reverseGameState(){
      setGameState(true)
    }

  return (
    <div className="App">
        <svg className='down' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#DEEBF8" d="M47,-20.7C60.1,-4.5,69.3,20.4,60.8,39.2C52.4,57.9,26.2,70.4,2,69.3C-22.3,68.2,-44.5,53.4,-56.5,32.6C-68.5,11.8,-70.3,-14.9,-59.1,-29.9C-48,-45,-24,-48.5,-3.5,-46.4C16.9,-44.4,33.9,-36.9,47,-20.7Z" transform="translate(100 100)" />
        </svg>
        <svg className='up' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFAD1" d="M47,-20.7C60.1,-4.5,69.3,20.4,60.8,39.2C52.4,57.9,26.2,70.4,2,69.3C-22.3,68.2,-44.5,53.4,-56.5,32.6C-68.5,11.8,-70.3,-14.9,-59.1,-29.9C-48,-45,-24,-48.5,-3.5,-46.4C16.9,-44.4,33.9,-36.9,47,-20.7Z" transform="translate(100 100)" />
        </svg>
        { !gameState ? <Welcome 
          handelLoad={reverseGameState}
        /> :
          <div className='the-app'>
            <div className='question-app'>
              {theQuestion}
            </div>
            
          </div>
        }
        <div className='check-container'>        
            <button
                className='check'
                onClick={() => setCheckAnswer(!checkAnswer)}
                >
                Check answers
            </button>
        </div>
    </div>
  );
}
