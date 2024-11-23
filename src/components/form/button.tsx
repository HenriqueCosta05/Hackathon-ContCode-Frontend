import React from "react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    className: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, onClick, className }) => {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick(e);
        }
    };

    if (href) {
        return (
            <Link href={href} onClick={handleClick} className={`p-3 rounded-md w-full text-center ${className}`}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`p-3 rounded-md w-full text-center ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
