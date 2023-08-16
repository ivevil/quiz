import Icon from "./Icon";

/* eslint-disable */
const Message = ({ message, color, children }) => {
    const showHide = message ? "show" : "hidden";
    const imgurl = color === "negative-red" ? "frown.svg" : "smile.svg";
    const imgalt = color === "negative-red" ? "Angry face icon" : "Sad face icon";
    const topmsg = color === "negative-red" ? "Oooops!" : "Yippie!";
    console.log(message);

    return (
        <div className={`bg-${color} sm:bg-transparent p-10 sm:p-2 w-100`}>
            <div className={`bg-${color} w-100 mt-10 sm:mt-2`}>
                <div className={`${showHide} w-full rounded-xl w-32 text-black sm:text-white flex flex-col sm:flex-row justify-center items-center m-auto py-3 sm:py-3 mb-4 sm:mb-5 -mt-16 sm:mt-3`}>
                    <div className={`${showHide} bg-white sm:bg-transparent rounded-xl w-32 text-black sm:text-white flex flex-col sm:flex-row justify-center items-center m-auto sm:m-0 py-3 sm:py-0 mb-8 sm:mb-0 -mt-16 sm:mt-0`}>
                        <Icon classes={`bg-${color} rounded-full h-6 p-1 mr-2`} imgurl={imgurl} alt={imgalt}></Icon>
                        {topmsg}
                    </div>

                    {message ? (
                        <h2 className="text-center text-white pb-6 sm:pb-0">{message}</h2>
                    ) :
                        ("")}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Message;