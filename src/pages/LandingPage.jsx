import React, { useState } from 'react';
import { motion } from "framer-motion"

const LandingPage = () => {

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
        <div className='flex items-center justify-center h-screen '>
            <div className='flex flex-col  items-center justify-center text-center'>
                <div className="md:text-6xl sm:text-5xl text-4xl p-4 font-bold text-white z-10">Hi, I'm Kuldeep Singh</div>
                <div className='text-white font-mono text-2xl md:text-3xl'>Full-stack web developer</div>

                <div className='mt-12 w-full flex items-center scale-90 sm:scale-100 justify-center '>
                    <motion.div
                        className="container flex flex-wrap    "
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        
                    >
                        <motion.div className="item" variants={items}>
                            <div className='profile-link flex justify-center w-52 hover:bg-slate-700 rounded-xl'>
                                <a href='https://www.linkedin.com/in/kuldeepsingh2468/' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/phots-5cad1.appspot.com/o/linkedin.svg?alt=media&token=857359f7-10b7-4d7f-b92d-0ccd3d60bb69' style={{ height: '50px' }} alt='Linkedin' />
                                    <span className='p-2 text-lg hover:text-white'>Linkedin</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div className="item" variants={items}>
                            <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                                <a href='https://www.codechef.com/users/kuldeep_88' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/phots-5cad1.appspot.com/o/icons8-codechef%20(1).svg?alt=media&token=f0ef63cf-483a-4dde-a46b-725a8aeef33d' style={{ height: '50px' }} alt='Codechef' />
                                    <span className='p-2 text-lg'>Codechef</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div className="item" variants={items}>
                            <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                                <a href='https://github.com/Kuldeep246' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/phots-5cad1.appspot.com/o/github.svg?alt=media&token=85609d7c-4909-4fab-87ee-ac3b0b66f17a' style={{ width: '50px', height: '50px' }} alt='Github' />
                                    <span className='p-2 text-lg'>Github</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div className="item" variants={items}>
                            <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                                <a href='https://codeforces.com/profile/kuldeep_88' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/phots-5cad1.appspot.com/o/code-forces.svg?alt=media&token=91033b64-99e8-482d-b11e-28acd05d186c' style={{ height: '50px' }} alt='Codeforces' />
                                    <span className='p-2 text-lg'>Codeforces</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div className="item" variants={items}>
                            <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                                <a href='https://leetcode.com/kuldeep_88/' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/phots-5cad1.appspot.com/o/leetcode.svg?alt=media&token=c3cef630-a7b2-4456-9be2-38de0cb097bd' style={{ width: '50px', height: '50px' }} alt='Leetcode' />
                                    <span className='p-2 text-lg'>Leetcode</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>


            </div>
        </div>


    );
};

export default LandingPage;
