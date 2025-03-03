const Button = ({ text, onClick, type = "primary" }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded ${
                type === "primary" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
            } hover:opacity-80 transition-all`}
        >
            {text}
        </button>
    );
};

export default Button;
