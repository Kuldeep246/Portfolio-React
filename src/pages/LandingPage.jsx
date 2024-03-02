import React, { useState } from 'react';

const LandingPage = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div className='h-screen w-screen flex items-center justify-center '>
            <div className='flex flex-col w-9/12 items-center text-center'>
                <div className="md:text-6xl sm:text-5xl text-4xl p-4 font-bold text-white z-10">Hi, I'm Kuldeep Singh</div>
                <div className='text-white font-mono text-2xl md:text-3xl'>Full-stack web developer</div>
                <button
                    className=" btn mt-4 w-28 p-2 text-lg bg-slate-700  btn-neutral rounded-3xl"
                    onClick={handleIncrement}
                >
                    count:{count}
                </button>
            </div>
        </div>


    );
};

export default LandingPage;
