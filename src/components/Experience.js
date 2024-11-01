import React from 'react';

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </div>
        </li>
    );
};

const Experience = () => {
    return (
        <div className='my-32'>
            <h1 className='font-bold text-8xl mb-28 w-full text-center text-dark'>Experience</h1>
            <div className='w-[75%] mx-auto relative'>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
