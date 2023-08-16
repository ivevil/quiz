/* eslint-disable */
import Indicators from './Indicators';
import Button from './Button';

const Score = ({ setShowScore, questions, score, wrong, setWrongAnswers, setScore }) => {

    const resetQuiz = () => {
        setShowScore(false);
        setScore(0);
        setWrongAnswers(0);
    }

    return (
        <div className="text-white text-center">
            <Indicators score={score} questions={questions} wrong={wrong} />
            <hr />
            <div className="bg-light-grayish-blue">
                <h2 className="pt-8 ">Quiz Complete!</h2>
                <h3 className="pt-8 pb-8">Your Score: {score}</h3>
            </div>
            <Button action={resetQuiz}>Try Again</Button>
        </div>
    );
};

export default Score;
