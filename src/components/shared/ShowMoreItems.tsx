import React, { useState } from 'react';
import Card from "./Card";

interface ItemProps {
    title: string;
    description: string;
    icon: string;
    projects: {
        title: string;
        description: string;
    }[]
}
interface ShowMoreItemsProps {
    allItems: ItemProps[];
    initialVisibleItems?: number;
    itemsPerClick?: number;
}

const ShowMoreItems: React.FC<ShowMoreItemsProps> = ({
 allItems,
 initialVisibleItems = 3,
 itemsPerClick = 3,
}) => {
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

    const handleShowMore = () => {
        if (visibleItems < allItems.length) {
            setVisibleItems(visibleItems + itemsPerClick);
        } else {
            setVisibleItems(initialVisibleItems);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Show More Items Component</h1>
            <ul className="flex gap-2 flex-col flex-wrap">
                {allItems.slice(0, visibleItems).map((project, index) => {
                    return project?.projects?.map((item, index) => (
                        <Card
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon="https://res.cloudinary.com/dybzxgodg/image/upload/v1678262715/irveloper/personal/profile.png"
                        />
                    ))
                })}
            </ul>
            <div className="flex justify-center py-5">
                <button className="bg-tertiary py-3 px-3 rounded-2xl hover:border-2" onClick={handleShowMore}>
                    {visibleItems < allItems.length ? 'See all projects' : 'See less projects'}
                </button>
            </div>
        </div>
    );
};

export default ShowMoreItems;
