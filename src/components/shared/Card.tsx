import React from 'react';

interface ICardProps {
    title: string;
    description: string;
    icon: string;
}

function Card({
                  title,
                  description,
                  icon
              }: ICardProps) {
    return (
        <div className="wrapper bg-transparent text-gray-100 hover:border-2 hover:border-amber-100 rounded-lg">
            <div>
                <picture className="w-full h-full object-cover object-center rounded-lg shadow-md ">
                    <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="rounded-lg p-2 bg-gray-500"/>
                </picture>
                <div className="relative px-2">
                    <div className="flex flex-col bg-primary py-6 px-0 rounded-lg shadow-lg pt-4 gap-y-2 ">
                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                            {title}
                        </h4>
                        <div className="flex items-baseline gap-2">
                            {[...Array(3).keys()].map((i, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-400 text-gray-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        New
                      </span>
                            ))}
                        </div>
                        <div className="mt-1">
                            {description}
                        </div>
                        <div className="mt-2">
                            <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;

