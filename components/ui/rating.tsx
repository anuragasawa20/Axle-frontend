import React from 'react';

const StarRating = ({ rating }:any) => {
    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={starValue}
                        style={{
                            cursor: 'pointer',
                            color: starValue <= rating ? 'gold' : 'gray',
                            // fontSize: "54px"
                        }}
                    >
                        &#9733; 
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
