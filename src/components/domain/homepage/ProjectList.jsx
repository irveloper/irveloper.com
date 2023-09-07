import { useState } from "react";
import Pill from '../../shared/Pill.tsx';
import Card from '../../shared/Card';
import ShowMoreItems from "../../shared/ShowMoreItems.tsx";
import { projectsList } from '../../../utils/__mocks__/data';

const MAX_ITEMS = 3;
const DEFAULT_PROJECT = 'All';
function ProjectList() {
    const [activeItem, setActiveItem] = useState(DEFAULT_PROJECT);
    const [allItems, setAllItems] = useState(projectsList);
    const currentItem = '';
    const handleClick = (newItem) => {
        setActiveItem(newItem.title);
        if (newItem.title === DEFAULT_PROJECT) {
            setAllItems(projectsList);
        }
        else {
            setAllItems(projectsList.filter((item) => item.title === newItem.title));
        }
    }
    let WRAPPER = (children) => <div className={projectsList.length + 1 >= MAX_ITEMS ? 'hidden': ''}>{children}</div>;

    return (
        <div className="w-full flex flex-col justify-center items-center bg-primary px-5 md:px-52 py-12">
            <h2 className="text-3xl text-white">My Projects</h2>
            <p className="text-gray-400 pt-5">
                I've been working in B2C and B2B projects,working with different backend and frontend technologies and
                frameworks
            </p>
            <div className="flex flex-wrap justify-center  gap-2 py-8">
                {projectsList?.map((project) => (
                    <Pill
                        key={project?.title}
                        title={project?.title}
                        onClick={handleClick}
                        isActive={project?.title === activeItem}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 justify-between gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
                <ShowMoreItems allItems={allItems} initialVisibleItems={2} itemsPerClick={2} />
            </div>
        </div>
    );
}

export default ProjectList;