import React from 'react';
import { TechRating } from '../../atoms/techRating/TechRating';

import './techPresentation.scss';

export const TechPresentation = ({ technologies }) => {
  return (
    <div className='tech-presentation'>
      {technologies.map((tech, key) => {
        return (
          <TechRating
            key={`tech-${key}`}
            techName={tech.name}
            techRate={tech.rate}
          />
        );
      })}
    </div>
  );
};
