import React from 'react';
import { InfoSection } from '../molecules/infoSection/InfoSection';

import './profesionalInfo.scss';

export const ProfesionalInfo = ({aboutMeInto, experienceInfo, personalProjectsInfo }) => {

  return (
    <div className='profesional-info'>
      <InfoSection
        sectionTitle={aboutMeInto.Title}
        sectionInfo={aboutMeInto.Info}
      />
      <InfoSection
        sectionTitle={'Experience'}

      />

      {experienceInfo.map((info, key) => {
       return <InfoSection
                key={`exp ${key}`}
                sectionSubtitle={info.JobTitle}
                sectionInfo={info.Date}
              />
      })}


      <InfoSection
        sectionTitle={'Education'}
        sectionSubtitle={'Engineering in software development'}
        sectionInfo={'Finished'}
      />
      <InfoSection
        sectionSubtitle={
          'Bachelor in business administration with a speciality in tourism'
        }
        sectionInfo={'Finished'}
      />
      <InfoSection
        sectionTitle={'Personal projects'}
      />

      {personalProjectsInfo.map((info, key) =>{
        return  <InfoSection
                  key={`pp ${key}`}
                  sectionSubtitle={info.Title}
                  sectionInfo={info.Description}
                  proyectUrl={info.Url}
      />
      })}
    </div>
  );
};
