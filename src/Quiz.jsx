/* eslint-disable */
import { useState } from "react";
import Navigation from './components/Navigation';
import Indicators from './components/Indicators';
import Button from './components/Button';
import Question from './components/Question';
import Input from './components/Input';
import Message from './components/Message';
import Icon from './components/Icon';
import Footer from './components/Footer';

const Quiz = ({ questions, setShowScore, score, setScore, wrong, setWrongAnswers }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [color, setColor] = useState("");
    const [message, setMessage] = useState("");

    const { question, correctAnswer } = questions !== null ? questions[currentQuestion] : "";

    const handleAnswerSelection = (selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = selectedAnswer;
        setAnswers(updatedAnswers);
    }

    const handleNextQuestion = () => {
        if (
            answers[currentQuestion] === questions[currentQuestion].answer ||
            JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
            setScore(score + 1);
            setColor("positive-green");
            setMessage("Deine Antwort war richtig!");
        } else {
            setWrongAnswers(wrong + 1);
            setColor("negative-red");
            setMessage("Deine Antwort war leider falsch.");
        }
        if (questions !== null && currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    }

    return (
        <>
            <div className="quiz-wrapper">
                <div className="px-10 sm:px-0 pt-10 mb-12 sm:mb-0">
                    <Indicators score={score} questions={questions} wrong={wrong} />
                    <Question currentQuestion={currentQuestion} question={question} />
                    <Input handleAnswerSelection={handleAnswerSelection} handleNextQuestion={handleNextQuestion} />
                </div>
                <Message message={message} color={color}>
                    <Button action={handleNextQuestion}>
                        Weiter <Icon classes="" imgurl="./chevron-right.svg" alt="Chevron Right" />
                    </Button>
                </Message>
            </div>
            <Footer />
        </>
    );
}

export default Quiz;
