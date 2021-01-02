import React from "react";

export default function Skills() {
  return (
    <div className='text-center' id='skills'>
      <img className='skillsImg' src='images/skills.jpg' alt='skills' />
      <div
        id='carouselExampleControls'
        className='carousel slide spacing text-center'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <ul className='carouselList'>
              <li className='liText'>
                <h2 style={{ textDecoration: "underline" }}>Front-End</h2>
              </li>
              <li className='liText'>
                <p>Html</p>
              </li>
              <li className='liText'>
                <p>Css</p>
              </li>
              <li className='liText'>
                <p>Sass</p>
              </li>
              <li className='liText'>
                <p>Javascript</p>
              </li>
              <li className='liText'>
                <p>React</p>
              </li>
              <li className='liText'>
                <p>jQuery</p>
              </li>
              <li className='liText'>
                <p>WordPress</p>
              </li>
            </ul>
          </div>
          <div className='carousel-item'>
            <ul className='carouselList'>
              <li className='liText'>
                <h2 style={{ textDecoration: "underline" }}>Back-End</h2>
              </li>
              <li className='liText'>
                <p>Node</p>
              </li>
              <li className='liText'>
                <p>EJS</p>
              </li>
              <li className='liText'>
                <p>SQL & MongoDB With Mongoose</p>
              </li>
              <li className='liText'>
                <p>API's</p>
              </li>
              <li className='liText'>
                <p>Authentication & Security</p>
              </li>
            </ul>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          data-slide='prev'
        >
          <span className='carousel-control-prev-icon'></span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          data-slide='next'
        >
          <span className='carousel-control-next-icon'></span>
        </a>
      </div>
    </div>
  );
}
