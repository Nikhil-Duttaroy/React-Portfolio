import React from 'react'
import './IntroPage.styles.css'

const IntroPage = () => {
  return (
    <section className='S1'>
      <div className='mainContainer'>
        <header>
          <h1 className='name'>Nikhil Duttaroy</h1>
        </header>
        <div className='container'>
          <div className='navWrapper'>
            <div class='themeDiv'>
              <div class='themeDot' data-mode='light' id='light'></div>
              <div class='themeDot' data-mode='pink' id='pink'></div>
              <div class='themeDot' data-mode='dark' id='dark'></div>
            </div>
            <nav>
              <ul id='navigation'>
                <li>
                  <a href='#third'>Projects</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class='leftColumn'>
            <div class='imageContainer'>
              <img src='../../assets/images/profile.jpeg' alt='Profile Image' id='profile' />
              <a href='#' class='button'>
                Contact Me
              </a>
            </div>
          </div>

          <div class='rightColumn'>
            <div class='preview'>
              <div class='overlays' id='overlay1'>
                <h4 class='typing'>Hi , I am Nikhil Duttaroy</h4>
              </div>
              <div class='overlays' id='overlay2'>
                <h4>Front - End Developer</h4>
              </div>
              <div class='overlays' id='overlay3'>
                <h4>Engineering Student</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default IntroPage