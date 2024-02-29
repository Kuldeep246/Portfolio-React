import React from 'react';
import Card from '../components/Card';
import { projectData } from '../utils/data';

const Projects = () => {
    

    return (
        <div>

            <div className='text-white items-center lg:py-36 py-24 lg:w-2/3 w-4/5 mx-auto'>
                <span className='text-5xl font-mono font-semibold'>Projects</span>
                <div className="divider divider-neutral"></div>
                <div className='grid  lg:grid-cols-3 grid-cols-2  gap-6 p-1 overflow-hidden w-full '>
                    {projectData.map((project) => (
                        <div className='flex rounded-lg hover:scale-105 cursor-pointer transition-transform items-center shadow-black shadow-md w-full  '>
                            <Card
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                sourceCodeLink={project.sourceCodeLink}
                                liveLink={project.liveLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Projects;
