import React, { useState } from 'react';
import Card from "./Card";

interface ItemProps {
    attributes: {
        name: string;
        description: string;
        icon: string;
        technologies: {
            data: {
                attributes: {
                    name: string;
                    description: string;
                }
            }[]
        }
        images: {
            data: {
                attributes: {
                    url: string;
                }
            }[]
        }
    }
}
interface ShowMoreItemsProps {
    items: ItemProps[];
    initialVisibleItems?: number;
    itemsPerClick?: number;
}

const ShowMoreItems: React.FC<ShowMoreItemsProps> = ({
 items,
 initialVisibleItems = 3,
 itemsPerClick = 3,
}) => {
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

    const handleShowMore = () => {
        if (visibleItems < items.length) {
            setVisibleItems(visibleItems + itemsPerClick);
        } else {
            setVisibleItems(initialVisibleItems);
        }
    };

    return (
        <div className="container mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row gap-4 p-0">
                {items && items.slice(0, visibleItems).map((item) => {
                    return (
                        <Card
                            key={item.attributes.name}
                            title={item.attributes.name}
                            description={item.attributes.description}
                            pills={item.attributes.technologies.data}
                            image={item.attributes.images.data[0].attributes.url}
                        />
                    )
                })}
            </ul>
            {items.length > 2 && (
                <div className="flex justify-center py-5">
                    <button className="bg-tertiary py-3 px-3 rounded-2xl hover:border-2" onClick={handleShowMore}>
                        {items && visibleItems < items.length ? 'See all projects' : 'See less projects'}
                    </button>
                </div>
            )}

        </div>
    );
};

export default ShowMoreItems;
