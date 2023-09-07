import React, { useState, useEffect, useRef } from 'react';
import { useComponentVisible } from '../../utils/hooks/useComponentVisible';

function GlobalNavMobile() {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick: React.MouseEventHandler<HTMLElement> = (event) => {
        setIsComponentVisible(!isComponentVisible);
    }
    const handleToggle = () => {
        setIsComponentVisible(true);
    }
    useEffect(() => {
       if(isComponentVisible) {
           document.body.style.overflow = "hidden"
       } else {
           document.body.style.overflow = "unset"
       }
    },[isComponentVisible])
    return (
        <>
            <button data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={handleToggle}
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-12 h-12 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"></path>
                </svg>
            </button>
            {isComponentVisible && (
                <div
                    className={`bg-red-900 fixed left-0 top-0 w-full h-full overflow-hidden block`}
                    id="overlay"

                >
                    <div
                        className="w-full flex h-full bg-gray-300"
                        id="navbar-default"
                        ref={contentRef}
                    >
                        <div className="w-4/5 h-full">
                            <div className="mobile-header bg-red-900">
                                {/*    TODO: add a header */}
                                <h1>header</h1>
                            </div>
                            <ul
                                className="flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 h-full"
                            >
                                <li>
                                    <a
                                        href="#about-me"
                                        className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-gray-100 md:dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 md:dark:hover:bg-transparent"
                                    >
                                        About Me
                                    </a>
                                </li>
                            </ul>
                        </div>
                      <div>
                          <button  onMouseUp={handleOutsideClick}>
                              Close
                          </button>
                      </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default GlobalNavMobile;