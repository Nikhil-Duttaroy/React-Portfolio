import React from 'react'
import { HashLink as Link} from 'react-router-hash-link';

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
            <div className='themeDiv'>
              <div className='themeDot' data-mode='light' id='light'></div>
              <div className='themeDot' data-mode='pink' id='pink'></div>
              <div className='themeDot' data-mode='dark' id='dark'></div>
            </div>
            <nav>
              
              <ul id='navigation'>

                <li>
                  <Link smooth to="#projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='leftColumn'>
            <div className='imageContainer'>
              <img
                src='../../assets/images/profile.jpeg'
                alt='Profile Image'
                id='profile'
              />
              <Link to="#contact" className='button'>
                Contact Me
              </Link>
            </div>
          </div>

          <div className='rightColumn'>
            <div className='preview'>
              <div className='overlays' id='overlay1'>
                <h4 className='typing'>Hi , I am Nikhil Duttaroy</h4>
              </div>
              <div className='overlays' id='overlay2'>
                <h4>Front - End Developer</h4>
              </div>
              <div className='overlays' id='overlay3'>
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