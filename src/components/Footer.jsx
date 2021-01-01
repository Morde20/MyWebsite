import React from "react";

export default function Footer() {
  return (
    <div className='spacing text-center'>
      <hr className='hr-dotted spacing' />
      <h2 id='Contact' className='spacing'>
        I hope you enjoyed my work, if you did then get In touch with me!
      </h2>
      <a className='spacingIcons' href={"mailTo: morde1515@gmail.com"}>
        <img src='/images/gmail.png' alt='gmailIcon' />
      </a>
      <a className='spacingIcons' href='https://www.linkedin.com/'>
        <img src='/images/linkedin.png' alt='linkedinIcon' />
      </a>
      <a className='spacingIcons' href='https://www.facebook.com/morde.yoiris/'>
        <img src='/images/facebook.png' alt='' />
      </a>
      <p className='spacing'>©{new Date().getFullYear()} Morde Yoiris.</p>
    </div>
  );
}
