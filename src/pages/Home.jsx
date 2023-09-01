/* eslint-disable */
import { useState, useEffect } from "react";
import QuizCards from '../components/QuizCards';
import Hero from '../components/Hero';

const Home = () => {

    const [quizzes, getQuizzes] = useState([]);

    useEffect(() => {
        fetch('/quizzes.json')
            .then(response => response.json())
            .then(json => getQuizzes(json));
    }, []);

    return (
        <>
            <div className="container w-full flex flex-wrap justify-around m-auto items-center mt-20">
                {
                    quizzes && quizzes.map((quizz, index) => <QuizCards key={index} quizz={quizz} />
                    )}
            </div>
        </>
    );
}

export default Home;
