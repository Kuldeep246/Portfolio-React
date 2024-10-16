import React from 'react';
const Card = ({ title, description, imageUrl, sourceCodeLink, liveLink }) => {
    return (
        <div className="card z-0 h-96 w-full   item-center glass">
            <figure className=''>
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </figure>
            <div className="h-32 pt-4 card-body">
                <h2 className="text-xl  card-title">{title}</h2>
                <p className="hidden text-sm sm:block">{description}</p>
                <div className="card-actions grid grid-cols-2    space-x-2 ">
                    <a href={sourceCodeLink} className="bg-blue-600 text-center  rounded-md py-2 w-full" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                    <a href={liveLink} className="bg-blue-600 text-center rounded-md py-2 w-full  " target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
