import React from "react";

export default function Header() {
  return (
    <div className='container'>
      <div>
        <h1>I'm Morde, A Web developer.</h1>
        <p className='pMarginTop'>
          Welcome To my website, have a look around, Check my story, skills and
          portfolio.
        </p>
        <p>
          feel free to contact me , Maybe this could be a start of a great
          friendship.
        </p>
      </div>
      <div>
        <div className='row planetsDiv'>
          <div className='col text-center'>
            <button
              className='btn'
              data-toggle='collapse'
              data-target='#firstPlanet'
            >
              <img className='planets' src='images/planet.png' alt='jupiter' />
            </button>
            <div className='collapse' id='firstPlanet'>
              <div className='planetText'>
                <p>
                  Full-Stack trained, I always believe in knowing all aspects of
                  a process.
                </p>
              </div>
            </div>
          </div>
          <div className='col text-center'>
            <button
              className='btn'
              data-toggle='collapse'
              data-target='#secondPlanet'
            >
              <img
                className='planets'
                src='images/planet2.png'
                alt='planet(2)'
              />
            </button>
            <div className='collapse' id='secondPlanet'>
              <div className='planetText'>
                <p>
                  Self-taught and always looking for the next project ahead and
                  to be a part of the next great idea!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col text-center'>
          <button
            className='btn'
            type='button'
            data-toggle='collapse'
            data-target='#thirdPlanet'
          >
            <img className='planets' src='images/globe.png' alt='globe' />
          </button>
          <div className='collapse' id='thirdPlanet'>
            <div className='planetText'>
              <p className='lastPlanet'>
                If you are looking for someone creative, passionate, kind of
                likeable and I picked your interest, Keep scrolling and see what
                I can do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
