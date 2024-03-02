import React from 'react';
import { motion } from "framer-motion"




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

const Techcard = ({ data }) => {
    return (
        <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <div className="grid lg:grid-cols-2 grid-cols-1   gap-4 p-3 overflow-hidden w-full shadow-black shadow-sm">

                {data.map((item, index) => (

                    <motion.div key={index} className="item" variants={items}>
                        <div
                            className="flex rounded-lg hover:scale-105 max-h-24 md:max-h-36 items-center cursor-pointer  shadow-black transition-transform bg-slate-800 w-full p-4 gap-4 shadow-md hover:shadow-lg"
                            key={index}
                        >
                            <img
                                src={item.imgSrc}
                                alt={`Card ${index}`}
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex flex-col">
                                <div className="font-bold text-lg md:text-xl mb-2 text-white">{item.title}</div>
                                <p className="text-gray-300 text-wrap text-xs sm:text-sm md:text-base">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Techcard;
