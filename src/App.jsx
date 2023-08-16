import Quiz from "./Quiz";
import { useState, useEffect } from "react";
import Score from "./components/Score";

function App() {
  const [questions, getQuestions] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrongAnswers] = useState(0);


  useEffect(() => {
    fetch('./questions.json')
      .then(response => response.json())
      .then(json => getQuestions(json));
  }, []);

  const shuffledArr = questions !== null ? questions.sort(() => Math.random() - 0.5) : null;

  return (
    <div className="quiz-container bg-dark-grayish-blue">
      {showScore ? (
        <Score setShowScore={setShowScore} questions={questions} score={score} wrong={wrong} setWrongAnswers={setWrongAnswers} setScore={setScore} />
      ) : (
        <Quiz setShowScore={setShowScore} questions={shuffledArr} score={score} setScore={setScore} wrong={wrong} setWrongAnswers={setWrongAnswers} />
      )}
    </div>
  )
}

export default App;
