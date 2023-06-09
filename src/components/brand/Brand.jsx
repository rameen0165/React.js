import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img scr={slack} alt='slack' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div>
        <img scr={dropbox} alt='dropbox' />
      </div>
      <div>
        <img scr={shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand
