/* eslint-disable */
import QuizCards from '../components/QuizCards';
import Hero from '../components/Hero';

const Home = () => {

    return (
        <>
            <div className="container w-full flex flex-wrap justify-around m-auto items-center mt-20">
                <QuizCards />
                <QuizCards />
                <QuizCards />
                <QuizCards />
                <QuizCards />
            </div>
        </>
    );
}

export default Home;
