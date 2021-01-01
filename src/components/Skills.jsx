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
              <li>
                <h2 style={{ textDecoration: "underline" }}>Front-End</h2>
              </li>
              <li>
                <p>Html</p>
              </li>
              <li>
                <p>Css</p>
              </li>
              <li>
                <p>Sass</p>
              </li>
              <li>
                <p>Javascript</p>
              </li>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>jQuery</p>
              </li>
              <li>
                <p>WordPress</p>
              </li>
            </ul>
          </div>
          <div className='carousel-item'>
            <ul className='carouselList'>
              <li>
                <h2 style={{ textDecoration: "underline" }}>Back-End</h2>
              </li>
              <li>
                <p>Node</p>
              </li>
              <li>
                <p>EJS</p>
              </li>
              <li>
                <p>SQL & MongoDB With Mongoose</p>
              </li>
              <li>
                <p>API's</p>
              </li>
              <li>
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
