import { useState } from "react"
import QuestionCard from "./components/QuestionCard"
import shuffle from "./function"

const App = () => {
    const [quizes, setQuizes] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
    const [allAnswers, setAllAnswers] = useState(null)
    const [quizFinish, setQuizFinish] = useState(false)
    const [pickedAnswer, setPickedAnswer] = useState(null)

    //fetch api
    const fetchApi = async () =>{
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')

        const {results} = await response.json()
        setQuizes(results)

        console.log(results)
        //getting all answers
        const initialQuestion = results[currentQuizIndex]
        setAllAnswers(shuffle(initialQuestion))
        setIsLoaded(true)
    }

    //navigate next 

    const navigateNext = () =>{
        console.log(currentQuizIndex)
        if(currentQuizIndex < quizes.length - 1 ){
            setCurrentQuizIndex((prevIndex) => prevIndex+1)
            const currentQuiz = quizes[currentQuizIndex+1]
            console.log(currentQuiz)
            setAllAnswers(shuffle(currentQuiz))
        }else{
            setQuizFinish(true)
        }
    }

  return (
    <div className="App">
      <div className="container">
        {!isLoaded &&
            <button onClick={fetchApi}>Start Quiz</button>
        }
        {isLoaded && !quizFinish &&
            <div className="quiz-section">
                <QuestionCard 
                    currentQuizIndex={currentQuizIndex}
                    quizes={quizes} 
                    quiz={quizes[currentQuizIndex]} 
                    allAnswers={allAnswers}
                    navigateNext={navigateNext}
                />
            </div>
        }
        {quizFinish &&
            <h2>Congratulations ! You successfully finished this quiz</h2>
        }
        
      </div>
    </div>
  );
}

export default App;
