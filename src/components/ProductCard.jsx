//eslint-disable-next-line
import React from 'react';
import RatingWidget from './RatingWidget';
import './ProductCard.css';

function ProductCard({ product, onRatingSubmit }) {
  const { id, name, description, image, avgRating, totalRatings } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="rating-info">
          <p>Average Rating: {avgRating.toFixed(1)}</p>
          <p>Total Reviews: {totalRatings}</p>
        </div>
        <RatingWidget 
          productId={id} 
          onRatingSubmit={onRatingSubmit} 
        />
      </div>
    </div>
  );
}

export default ProductCard;