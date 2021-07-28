import React, {useEffect, useState} from 'react';
import { MailFilled, GithubFilled, CompassFilled } from '@ant-design/icons';
import { PersonalPhrase } from '../molecules/personalPhrase/PersonalPhrase';
import { Modal } from '../molecules/modal/Modal'
import cvPDF from '../../assets/joaquin-camara-cv.pdf'

import './presentationInfo.scss';


export const PresentationInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
     let modal = document.getElementById("myModal");
     if (isModalOpen)  {
      modal.style.display = "block"
    } else  if (!isModalOpen) {
      modal.style.display = "none"
    }
  })  


  return (
    <div className='presentation-info'>
      <Modal onHandlerModal={() => setIsModalOpen(!isModalOpen)} />
      <div className='presentation-info__name-info'>
        <h1>JOAQUIN</h1>
        <h1>CAMARA</h1>
        <p className='presentation-info__name-info__cv-text'>
          SOFTWARE ENGINEER
        </p>

        <PersonalPhrase />
      </div>

      <div className='presentation-info__contact-info'>
        <div className='presentation-info__contact-info__info-text'>
          <MailFilled />
          <p>joaquin_camara@outlook.com</p>
        </div>
        <div className='presentation-info__contact-info__info-text'>
          <GithubFilled />
          <p>@joaquincamara</p>
        </div>

        <div className='presentation-info__contact-info__info-text'>
          <a  href='https://github.com/sponsors/joaquincamara' target='_blank'>
            Checkout my Github sponsor
          </a>
        </div>

        <div className='presentation-info__contact-info__info-text'>
          <a onClick={() => setIsModalOpen(!isModalOpen)} href={cvPDF}  download>
            Downdload Joaquin Camara Curriculum
          </a>
        </div>

        <div className='presentation-info__contact-info__info-text'>
          <a href='https://www.behance.net/johngatapia' target='_blank'>
            Original Design by: John Gatapia
          </a>
        </div>
      </div>
    </div>
  );
};
