import Quiz from "../Quiz";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Score from "../components/Score";
import Footer from '../components/Footer';

const QuizTemplate = () => {
  const [questions, getQuestions] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrongAnswers] = useState(0);


  useEffect(() => {
    fetch('./questions.json')
      .then(response => response.json())
      .then(json => getQuestions(json.sort(() => Math.random() - 0.5)));
  }, []);
  const { id } = useParams()
  console.log(id);
  
  return (
    <div className="quiz-container bg-dark-grayish-blue">
      <div className="quiz-wrapper pb-20 sm:pb-0">
        {showScore ? (
          <Score setShowScore={setShowScore} questions={questions} score={score} wrong={wrong} setWrongAnswers={setWrongAnswers} setScore={setScore} />
        ) : (
          <Quiz setShowScore={setShowScore} getQuestions={getQuestions} questions={questions} score={score} setScore={setScore} wrong={wrong} setWrongAnswers={setWrongAnswers} />
        )}
      </div>
    </div>
  )
}

export default QuizTemplate;
