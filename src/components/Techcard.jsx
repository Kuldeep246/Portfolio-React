import React from 'react';

const Techcard = ({ data }) => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1   gap-4 p-3 overflow-hidden w-full shadow-black shadow-sm">
            {data.map((item, index) => (
                <div
                    className="flex rounded-lg hover:scale-105 max-h-36 items-center cursor-pointer  shadow-black transition-transform bg-slate-800 w-full p-4 gap-4 shadow-md hover:shadow-lg"
                    key={index}
                >
                    <img
                        src={item.imgSrc}
                        alt={`Card ${index}`}
                        className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col">
                        <div className="font-bold text-xl mb-2 text-white">{item.title}</div>
                        <p className="text-gray-300 text-base">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Techcard;
