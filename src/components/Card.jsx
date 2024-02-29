import React from 'react';

const Card = ({ title, description, imageUrl, sourceCodeLink, liveLink }) => {
    return (
        <div className="card scale-90 item-center glass">
            <figure><img src={imageUrl} alt={title} className="w-full h-full object-cover" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions flex justify-center space-x-5">
                    <a href={sourceCodeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Source code</a>
                    <a href={liveLink} className="btn btn-primary w-28" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
