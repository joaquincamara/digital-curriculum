import React from 'react';
import './coolFeatureList.scss';

export const CoolFeatureList = ({ list }) => {
  return (
    <div className='coolFeature-list'>
      {list.map((content, key) => {
        return <h3 key={`content-${key}`}>{content}</h3>;
      })}
    </div>
  );
};
