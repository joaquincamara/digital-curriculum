import React, {useState, useEffect} from 'react';
import './App.scss';
import { PresentationInfo } from './components/presentationInfo/presentationInfo';
import { ProfesionalInfo } from './components/professionalInfo/ProfesionalInfo';
import { SkillsInfo } from './components/skillsInfo/SkillsInfo';
import {IgetAboutMeInfo} from './services/aboutMe'
import {IgetExperienceInfo} from './services/experience'
import {IgetPersonalProjectsInfo} from './services/personalProjects'
import {IgetDevTechsInfo} from './services/devTechs'
import {IgetCoolFeaturesInfo} from './services/coolFeatures'
import Loader from "react-loader-spinner";
import _ from 'lodash'

function App() {
  const [aboutMeInto, setAboutMeInfo] = useState({})
  const [experienceInfo, setExperienceInfo] = useState([])
  const [personalProjectsInfo, setPersonalProjectsInfo] = useState([])
  const [devTechInto, setDevTech] = useState([])
  const [coolFeatures, setCoolFeaturesInfo] = useState([])

  useEffect(()=> {
    IFetchAboutMeInto()
    IFetchExperienceInfo()
    IFetchpersonalProjectsInfo()
    IFetchDevTechsInfo()
    IFetchCoolFeaturesInfo()
  }, [])

  const IFetchAboutMeInto = async () => {
    const result = await IgetAboutMeInfo()
    setAboutMeInfo(result)
  }

  const IFetchExperienceInfo= async () => {
    const result = await IgetExperienceInfo()
    setExperienceInfo(result)
  }

  const IFetchpersonalProjectsInfo= async () => {
    const result = await IgetPersonalProjectsInfo()
    setPersonalProjectsInfo(result)
  }

  const IFetchDevTechsInfo = async () => {
    const result = await IgetDevTechsInfo()
    setDevTech(result)
  }

  const IFetchCoolFeaturesInfo = async () => {
    const result = await IgetCoolFeaturesInfo()
    setCoolFeaturesInfo(result)
  }



  return (
    <div className='App'>
      <PresentationInfo />
      {_.isEmpty(aboutMeInto) || _.isEmpty(experienceInfo) || _.isEmpty(personalProjectsInfo || _.isEmpty(devTechInto) || _.isEmpty(coolFeatures)) ?
            <div className={'loader'}>
            <Loader
              type="Bars"
              color="#ffc436"
              height={70}
              width={70}
            />
          </div> :
          <React.Fragment>
            <ProfesionalInfo
              aboutMeInto={aboutMeInto}
              experienceInfo={experienceInfo}
              personalProjectsInfo={personalProjectsInfo}
            />
            <SkillsInfo
              devTechInto={devTechInto}
              coolFeatures={coolFeatures}
            />
          </React.Fragment>
      }
    </div>
  );
}

export default App;
