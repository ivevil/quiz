import { Link } from "react-router-dom";

const QuizCards = () => {
    return (
        <Link to="/quiz" className="flex flex-col items-center mb-10 bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-grayish-blue hover:text-white">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="./image.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-400">Geography</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Test your geography with this small test of 20 questions.</p>
                </div>
        </Link>
    )
}

export default QuizCards;