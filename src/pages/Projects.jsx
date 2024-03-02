import React from 'react';
import Card from '../components/Card';
import { projectData } from '../utils/data';
import { motion } from "framer-motion"

const Projects = () => {


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.3,
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    return (
        <div>

            <div className='text-white z-0 items-center sm:p-0 p-1 lg:py-36 py-24 lg:w-2/3 w-11/12 mx-auto'>
                <span className='text-3xl sm:text-5xl font-mono font-semibold'>Projects</span>
                <div className="divider divider-neutral"></div>
                <motion.div
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <div className='grid  lg:grid-cols-3 grid-cols-2 z-0 gap-8 sm:gap-6 p-1 overflow-hidden w-full'>
                        {projectData.map((project) => (
                            <div className='flex rounded-lg hover:scale-105 sm:scale-100 scale-90 cursor-pointer transition-transform items-center shadow-black sm:shadow-md w-11/12 '>
                                <motion.div  className="item" variants={items}>
                                    <Card
                                        key={project.id}
                                        title={project.title}
                                        description={project.description}
                                        imageUrl={project.imageUrl}
                                        sourceCodeLink={project.sourceCodeLink}
                                        liveLink={project.liveLink}
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default Projects;
