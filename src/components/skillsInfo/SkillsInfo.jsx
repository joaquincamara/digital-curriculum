import React from 'react';
import { InfoSection } from '../molecules/infoSection/InfoSection';

import './skillsInfo.scss';

export const SkillsInfo = ({devTechInto, coolFeatures}) => {
  return (
    <div className='skills-info'>
      <InfoSection
        sectionTitle={'Programming Technologies'}
        technologies={devTechInto}
      />

      <InfoSection
        sectionTitle={'Cool Features'}
        textList={coolFeatures}
      />
    </div>
  );
};
