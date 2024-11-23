import React from "react";

interface ButtonProps {
    text: string;
    href: string;
    className: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={`p-3 rounded-md w-full text-center ${className}`} type="button">
            {text}
        </button>
    );
};

export default Button;
