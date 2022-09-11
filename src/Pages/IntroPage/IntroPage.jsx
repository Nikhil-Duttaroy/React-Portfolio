import { React, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { gsap } from "gsap";

import "./IntroPage.styles.css";

const IntroPage = ({changeTheme}) => {

  useEffect(() => {
    gsap.from("#overlay2", {
      duration: 1.5,
      delay: 1,
      y: "-15px",
      x: "-5px",
      opacity: 0,
      ease: "slow",
    });
    gsap.from("#overlay3", {
      duration: 1.5,
      delay: 2.5,
      y: "-15px",
      x: "-5px",
      opacity: 0,
      ease: "slow",
    });
  });

  return (
    <section className='S1'>
      <div className='mainContainer'>
        <header>
          <h1 className='name'>Nikhil Duttaroy</h1>
        </header>
        <div className='container'>
          <div className='navWrapper'>
            <div className='themeDiv'>
              <div
                className='themeDot'
                data-mode='light'
                id='light'
                onClick={() => {changeTheme("light")
              }}
              ></div>
              <div
                className='themeDot'
                data-mode='pink'
                id='pink'
                onClick={() => changeTheme("pink")}
              ></div>
              <div
                className='themeDot'
                data-mode='dark'
                id='dark'
                onClick={() => changeTheme("dark")}
              ></div>
            </div>
            <nav>
              <ul id='navigation'>
                <li>
                  <Link smooth to='#projects'>
                    Projects
                  </Link>
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
              <Link to='#contact' className='button'>
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
                <h4>Engineering Graduate</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
