import React, { useState } from 'react';
import Techcard from '../components/Techcard';
import { GoDotFill } from "react-icons/go";
import { data1, data2, data3, data4 } from '../utils/data';
import { motion } from "framer-motion"


const About = () => {
    return (
        <div>

            <div className='text-white lg:py-36 py-24 p-4 mx-auto  lg:w-2/3 md:w-4/5 w-full'>
                <div className='p-4'>
                    <div className='sm:text-3xl text-2xl font-semibold'>About me!</div>
                    <div className="divider divider-neutral"></div>
                    <div className='flex'>
                        <div className='flex md:w-2/3 w-full  flex-col'>
                            <p className='pl-2 text-sm sm:text-base py-4 pr-5'>
                                I am Kuldeep Singh, currently pursuing my B.Tech in Computer Science and Engineering from RGIPT.<br />
                                I am a passionate full-stack developer, enthusiastic about creating web applications and solving
                                real-world problems through technology.
                            </p>
                            <a className='btn btn-success transition-transform hover:scale-105 shadow-xl shadow-black w-24' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1yE1zsU6Tb-FIie4DUadLn3PN2XB4Hucx/view'> Resume</a>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={e => { }}
                            onHoverEnd={e => { }}
                        >
                            <div className='hidden  md:block'>
                                <img
                                    src='https://firebasestorage.googleapis.com/v0/b/phots-5cad1.appspot.com/o/profile-pic-2.jpg?alt=media&token=962a1a21-69a1-45b6-8971-6bda3614dc8e'
                                    className='h-60 shadow-lg  shadow-black rounded-lg opacity-70'
                                    alt='Profile Pic'
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='md:p-4 p-1'>
                    <div className='sm:text-3xl text-2xl py-2 font-semibold'>Skills</div>
                    <div className="divider divider-neutral"></div>
                    <div>
                        <div className='md:p-3  p-1 '>
                            <span className='sm:text-2xl text-xl font-mono font-semibold'>Programing Language</span>
                            <Techcard data={data1} />

                        </div>
                        <div className='md:p-3 p-1'>
                            <span className='sm:text-2xl text-xl font-mono font-semibold'> Technology</span>
                            <div className='md:p-3 p-1 '>
                                <div className='md:p-3 p-1'>
                                    <span className='sm:text-2xl text-xl font-sans font-semibold'> Frontend</span>
                                    <div className='flex flex-wrap '>
                                        <Techcard data={data2} />
                                    </div>
                                </div>
                                <div className='md:p-3 p-1'>
                                    <span className='sm:text-2xl text-xl font-sans font-semibold'> Backend</span>
                                    <div className='flex flex-wrap '>
                                        <Techcard data={data3} />
                                    </div>
                                </div>
                                <div className='md:p-3 p-1'>
                                    <span className='sm:text-2xl text-xl font-sans font-semibold'> Other</span>
                                    <div className='flex flex-wrap '>
                                        <Techcard data={data4} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:p-3 p-1'>
                    <div className='sm:text-3xl text-2xl font-semibold'>Education</div>
                    <div className="divider divider-neutral"></div>
                    <div className='pl-4 md:pl-10'>
                        <h3 className="text-base md:text-xl font-semibold ">Rajiv Gandhi Institute of Petroleum Technology(RGIPT)</h3>
                        <ul className="list-inside list-disc ml-2 md:ml-6">
                            <li className="flex text-sm md:text-base  justify-between">
                                <div className='flex justify-start'><GoDotFill className='mt-1 pr-1' />
                                    <span>Bachelor's in Computer Science and Engineering</span>
                                </div>
                                <span>(Dec 2021 - May 2025)</span>
                            </li>
                        </ul>

                        <h3 className="text-base md:text-xl font-semibold mt-3">Saint Soldier Public School, Jaipur</h3>
                        <ul className="list-inside list-disc ml-2 md:ml-6">
                            <li className="flex text-sm md:text-base  justify-between">
                                <div className='flex justify-start'><GoDotFill className='mt-1 pr-1' />
                                    <span>AISSCE (Class XII)</span>
                                </div>
                                <span>(May 2020)</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default About;
