import React from 'react';
const Card = ({ title, description, imageUrl, sourceCodeLink, liveLink }) => {
    return (
        <div className="card z-0 h-96 w-72 scale-100  lg:scale-75 xl:scale-100 item-center glass">
            <figure className='h-42'>
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </figure>
            <div className="lg:scale-100 md:scale-95 sm:scale-90 scale-90  card-body">
                <h2 className="sm:text-xl text-base mt-1 card-title">{title}</h2>
                <p className="hidden text-sm sm:block">{description}</p>
                <div className="card-actions flex justify-center space-x-2 sm:space-x-5">
                    <a href={sourceCodeLink} className="btn scale-100 btn-primary " target="_blank" rel="noopener noreferrer">
                        Source code
                    </a>
                    <a href={liveLink} className="btn  scale-100 border-0 btn-primary w-20  " target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
