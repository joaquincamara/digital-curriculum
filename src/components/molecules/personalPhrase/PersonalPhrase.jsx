import React from 'react';
import personalLogo from '../../../assets/personal_brand.svg';

import './personalPhrase.scss';

export const PersonalPhrase = () => {
  return (
    <div className='personal-phrase'>
      <img src={personalLogo} alt='Personal-logo' />
      <p>CONQUERING MY TRUTH</p>
    </div>
  );
};
