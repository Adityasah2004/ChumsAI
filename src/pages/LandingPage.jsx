import React from 'react';

const HomePage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Flowbite is out! See what's new</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Learn more
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 011.414-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <div className="flex justify-center space-x-5">
            <FeaturedItem href="#" svg={<svg className="w-14 h-14 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.293 13.293a1 1 0 011.414 0L13 14.586V17a1 1 0 11-2 0v-2.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414l-3-3a1 1 0 011.414-1.414L11 8.414V6a1 1 0 112 0v2.414l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 010 1.414l3 3a1 1 0 01-1.414 1.414L13 12.414V15a1 1 0 01-2 0v-2.414l-1.293 1.293a1 1 0 01-1.414 0l-3-3z" clipRule="evenodd"></path></svg>} />
            <FeaturedItem href="#" svg={<svg className="w-14 h-14 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 10a6 6 0 1112 0 6 6 0 01-12 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-8a1 1 0 012 0v1a1 1 0 01-1 1H7a1 1 0 010-2h1V2a1 1 0 012 0zM4.697 7.303a1 1 0 010-1.414l.586-.586a1 1 0 011.414 0l1.818 1.818-1.415 1.415L4.697 7.303zM11 13a1 1 0 010-2h1a1 1 0 010 2h-1zM7 13a1 1 0 010-2h1a1 1 0 110 2H7z" clipRule="evenodd"></path></svg>} />
            <FeaturedItem href="#" svg={<svg className="w-14 h-14 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM5 8a1 1 0 100 2h3a1 1 0 100-2H5zm0 4a1 1 0 100 2h3a1 1 0 100-2H5zm12-4a1 1 0 00-1-1h-8a1 1 0 100 2h8a1 1 0 001-1zm-2 4a1 1 0 110 2h-3a1 1 0 110-2h3zm-3 4a1 1 0 110-2h3a1 1 0 110 2h-3z" clipRule="evenodd"></path></svg>} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
