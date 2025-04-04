//eslint-disable-next-line
import React, { useState } from 'react';
import './RatingWidget.css';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${
              (hoveredRating || rating) >= star ? 'filled' : 'empty'
            }`}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button 
        className="submit-button"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
}

export default RatingWidget;