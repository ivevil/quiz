/* eslint-disable */
const Button = ({ action, children }) => {
    return (
        <button
            type="submit"
            className="button-submit bg-primary hover:bg-primary-dark text-white flex justify-between w-full sm:w-32 px-4 py-4 rounded-xl"
            onClick={action}>
            {children}
        </button>
    );
};

export default Button;