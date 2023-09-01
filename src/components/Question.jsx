/* eslint-disable */
import Icon from './Icon';

const Question = ({ currentQuestion, question }) => {
    return (
        <div className="bg-grayish-blue sm:bg-transparent py-10 sm:py-2 px-10 text-white mb-14 sm:mb-2 rounded-xl">
            <h2 className="text-primary text-center pb-8 text-sm">FRAGE {currentQuestion + 1}</h2>
            <div className="flex justify-center items-center">
                <hr className="w-full mr-4" />
                <Icon classes="" imgurl="/question.svg" alt="Small icon" />
                <hr className="w-full ml-4" />
            </div>
            <h1 className="text-xl text-center font-semibold pt-8">&quot;{question}&quot;</h1>
        </div>
    );
};

export default Question;