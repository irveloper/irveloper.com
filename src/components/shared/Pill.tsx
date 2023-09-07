import React from 'react';
interface IPillProps {
    title: string,
    onClick: (item: {
        title: string
    }) => void;
    isActive: boolean;
}

function Pill({
    title,
    onClick,
    isActive
}: IPillProps) {
    const handleOnClick = () => {
        onClick({
            title
        });
    }
    return (
        <button
            className={`py-2 px-4 shadow-md rounded-full bg-indigo-700 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-indigo-500 min-w-max ${isActive ? ' border-2 border-amber-50' : ''}`}
            onClick={handleOnClick}
            disabled={isActive}
        >
            {title}
        </button>
    );
}

export default Pill;