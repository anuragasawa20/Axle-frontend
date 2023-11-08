import React, { useState } from 'react';

const StarRatingInput = ({ onRatingChange }:any) => {
    const [rating, setRating] = useState(5);

    const handleStarClick = (star:any) => {
        setRating(star);
        onRatingChange(star); 
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={starValue}
                        onClick={() => handleStarClick(starValue)}
                        style={{
                            cursor: 'pointer',
                            color: starValue <= rating ? 'gold' : 'gray',
                            fontSize: '54px',
                        }}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

export default StarRatingInput;
