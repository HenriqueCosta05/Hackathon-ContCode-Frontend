import Link from 'next/link';
import React from 'react';

interface CardProps {
    title: string;
    tag: string;
    date: Date;
    bullets: {
        key: string;
        value: string;
    }[];
    action: {
        text: string;
        href: string;
    }
    description?: string;
}

export default function Card({ title, date, tag, bullets, action, description}: CardProps) {
    return (
        <>
            <div className="w-96 border-2 rounded text-l m-8 border-primary">
                <div className="bg-primary px-3 py-3 font-sans font-semibold text-white text-center">{title}</div>
                <div className="flex justify-between pt-4">
                    <div className="bg-secondary text-white px-2 py-1 rounded-full text-xs uppercase font-semibold ml-4">
                        {tag}
                    </div>
                    <div className="text-xs font-semibold block pl-32">
                        {date?.toLocaleDateString()}
                    </div>
                    <hr />
                </div>
                <div className="border-b-2 border-primary m-2"></div>
                <div className="container mx-auto">
                    {bullets.map((bullet) => (
                        <div className="flex justify-around">
                            <div className="text-xs font-semibold pl-4">{bullet.key}:</div>
                            <div className="text-xs font-semibold pr-4">{bullet.value}</div>
                        </div>
                    ))}
                </div>
                <div className='container mx-auto'>
                    <div className='text-xs font-semibold pl-4'>{description || ''}</div>
                </div>

                <div className="flex my-4">
                    <Link href={action.href} className='bg-secondary rounded-md m-auto py-2 px-6 text-white font-semibold'>
                        {action.text}
                    </Link>
                    </div>
            </div>
        </>
    );
}
