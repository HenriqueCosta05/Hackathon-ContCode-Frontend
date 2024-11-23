import Link from 'next/link';
import React from 'react';

interface CardProps {
    title: string;
    description?: string;
    bullets?: {
        text: string;
    }[];
    action?: {
        text: string;
        href: string;
    };
}

export default function Card({ title, description, bullets, action }: CardProps) {
    return (
        <div className="flex justify-center items-center w-64 h-auto border border-primary rounded-md flex-col p-8">
            <h3 className="font-bold text-2xl mb-4">{title}</h3>
            {description && <span className="font-light mb-4">{description}</span>}
            {bullets && bullets.length > 0 && (
                <ul className="list-disc pl-4">
                    {bullets.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
            )}
            {action && (
                <Link
                    href={action.href}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                >
                    {action.text}
                </Link>
            )}
        </div>
    );
}
