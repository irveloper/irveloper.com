import React from 'react';

interface IPillProps {
    attributes: {
        name: string;
    }
}

interface ICardProps {
    title: string;
    description: string;
    image: string;
    pills: IPillProps[];
}

function Card({
  title,
  description,
  image,
  pills
}: ICardProps) {
    return (
        <div className="wrapper bg-transparent text-gray-100 hover:border-2 hover:border-amber-100 rounded-lg">
            <div>
                <picture className="w-full h-full object-cover object-center rounded-lg shadow-md ">
                    <img src={image} alt=" random imgee" className="rounded-lg p-2 bg-gray-500"/>
                </picture>
                <div className="relative px-2">
                    <div className="flex flex-col bg-primary py-6 px-0 rounded-lg shadow-lg pt-4 gap-y-2 ">
                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate  text-ellipsis">
                            {title}
                        </h4>
                        <div className="flex items-baseline gap-2">
                            {pills && pills.map((pill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-400 text-gray-900 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        {pill.attributes.name}
                      </span>
                            ))}
                        </div>
                        <div className="mt-1">
                            {description}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;

