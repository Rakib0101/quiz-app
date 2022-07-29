import React from 'react'
import AnswerCard from './AnswerCard'

const QuestionCard = ({currentQuizIndex, quizes, quiz, allAnswers, navigateNext}) => {
  return (
    <div>
        <p>Question: {currentQuizIndex + 1} / {quizes.length}</p>
        <h2>{quiz.question}</h2>
        {
            allAnswers.map((answer, i) => {
                return <AnswerCard answer={answer} key={i} />
            })
        }
        {
            <button onClick={navigateNext}>Next</button>
        }
    </div>
  )
}

export default QuestionCard
