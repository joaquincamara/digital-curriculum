import React from 'react';
import { VerticalDivider } from '../../atoms/verticalDivider/VerticalDivider';
import { TechPresentation } from '../techPresentation/TechPresentation';
import { CoolFeatureList } from '../coolFeatureList/CoolFeatureList';
import { When } from '../../../utils/When';

import './infoSection.scss';

export const InfoSection = ({
  sectionTitle,
  sectionSubtitle,
  sectionInfo,
  technologies,
  textList,
  proyectUrl
}) => {
  return (
    <div className='info-section'>
      <VerticalDivider />

      <div className='info-section__content'>
        <When predicate={sectionTitle}>
          <h1>{sectionTitle}</h1>
        </When>
        <When predicate={sectionSubtitle}>
          <h3>{sectionSubtitle}</h3>
        </When>
        <When predicate={sectionInfo}>
          <p>{sectionInfo}</p>
        </When>

        <When predicate={sectionInfo && proyectUrl}>
          <a target="_blank" href={proyectUrl}>{proyectUrl}</a>
        </When>

        <When predicate={technologies}>
          <TechPresentation technologies={technologies} />
        </When>

        <When predicate={textList}>
          <CoolFeatureList list={textList} />
        </When>
      </div>
    </div>
  );
};
