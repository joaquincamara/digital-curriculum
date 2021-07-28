import React from 'react';

import './techRating.scss';

export const TechRating = ({ techName, techRate }) => {
  return (
    <div className='tech-rating'>
      <h1>{techName}</h1>
      <div className='tech-rating__rate'>
        <hr
          className={
            techRate >= 1
              ? 'tech-rating__rate__full'
              : 'tech-rating__rate__empty'
          }
        />
        <hr
          className={
            techRate >= 2
              ? 'tech-rating__rate__full'
              : 'tech-rating__rate__empty'
          }
        />
        <hr
          className={
            techRate >= 3
              ? 'tech-rating__rate__full'
              : 'tech-rating__rate__empty'
          }
        />
        <hr
          className={
            techRate >= 4
              ? 'tech-rating__rate__full'
              : 'tech-rating__rate__empty'
          }
        />
        <hr
          className={
            techRate === 5
              ? 'tech-rating__rate__full'
              : 'tech-rating__rate__empty'
          }
        />
      </div>
    </div>
  );
};
