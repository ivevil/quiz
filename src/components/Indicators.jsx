/* eslint-disable */
import Icon from './Icon';
import Indicator from './Indicator';

const Indicators = ({ questions, score, wrong }) => {

    return (
        <div className="flex justify-around items-center pb-10">
            <Indicator>
                <Icon classes="bg-grayish-blue rounded-full h-6 p-1 mr-2" imgurl="/question.svg" alt="Fragen" />
                {questions !== null && questions.length} Fragen
            </Indicator>
            <Indicator>
                <Icon classes="bg-positive-green rounded-full h-6 p-1 mr-2" imgurl="/smile.svg" alt="Richtig" />
                {score} Richtig
            </Indicator>
            <Indicator>
                <Icon classes="bg-negative-red rounded-full h-6 p-1 mr-2" imgurl="/frown.svg" alt="Falsch" />
                {wrong} Falsch
            </Indicator>
        </div>
    );
};

export default Indicators;