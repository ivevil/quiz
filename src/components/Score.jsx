/* eslint-disable */
import Indicators from './Indicators';
import Button from './Button';
import Icon from './Icon';

const Score = ({ setShowScore, questions, score, wrong, setWrongAnswers, setScore }) => {

    const resetQuiz = () => {
        setShowScore(false);
        setScore(0);
        setWrongAnswers(0);
        questions.sort(() => Math.random() - 0.5);
    }

    const pieChart = (360 / questions.length) * wrong;

    return (
        <div className="quiz-wrapper pb-20 sm:pb-0">
            <div className="text-white text-center pt-20">
                <Indicators score={score} questions={questions} wrong={wrong} />
                <hr />
                <h2 className="pt-8 font-bold text-xxl uppercase">Quiz Completed!</h2>
                <div className="flex justify-center flex-col sm:flex-row pb-20">
                    <div className="w-full">
                        <h3 className="pt-8 pb-2 uppercase text-center text-center sm:text-right text-xxl">Your Score: </h3>
                        <p className="text-xxxl text-positive-green text-center sm:text-right font-bold">{score}</p>
                        <h3 className="pt-8 pb-2 uppercase text-center sm:text-right text-xxl">Wrong answers: </h3>
                        <p className="text-xxxl text-negative-red text-center sm:text-right font-bold">{wrong}</p>
                    </div>
                    <div className="w-full">
                        <h3 className="pt-8 pb-2 uppercase text-center sm:text-right text-xl">Correct answer percentage</h3>
                        <div className="piechart" style={{backgroundImage: `conic-gradient(hsl(338, 87%, 66%) ${pieChart}deg, hsl(176, 72%, 46%) 0)`}}></div>
                    </div>
                </div>
                <div className="flex justify-center w-full m-auto">
                    <Button action={resetQuiz}>Try Again <Icon classes="" imgurl="/chevron-right.svg" alt="Chevron Right" /></Button>
                </div>
            </div>
        </div>
    );
};

export default Score;
