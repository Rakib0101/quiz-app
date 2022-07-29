const App = () => {
    const [quizes, setQuizes] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    //fetch api
    const fetchApi = async () =>{
        const response = fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')

        const {results} = await response.json()
        
        setQuizes(results)
        setIsLoaded(true)
    }

  return (
    <div className="App">
      <div className="container">
        {!isLoaded &&
            <button onClick={fetchApi}>Start Quiz</button>
        }
        {isLoaded &&
            <div className="quiz-section"></div>
        }
        
      </div>
    </div>
  );
}

export default App;
