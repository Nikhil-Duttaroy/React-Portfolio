import React from 'react';
import "./StackPage.styles.css";
import { TechStack } from '../../TechStack';
import { Socials } from '../../socials';

const StackPage = () => {
  return (
    <section className='S2'>
      <div className='mainContainer'>
        <div className='aboutWrapper'>
          <div className='aboutMe'>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>Tech Stack</h4>
            <div className='tech_container'>
              {TechStack.map((tech, index) => (
                <div className='block' key={index}>
                  <img src={`../../assets/images/${tech.src}`} alt={`${tech.name} icon`} className='icons' />
                  <span className='icon_name'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='socialLinks'>
            <h4 className='centeredText'>Social Media Links</h4>
            <div className='social_container'>
              {Socials.map((social, index) => (
                <div className='social_block' key={index}>
                  <img src={`../../assets/images/${social.src}`} alt={`${social.name} icon`} className='social_img' />
                  <a href={social.href} target='_blank' rel='noopener noreferrer'>
                    <span className='social_name'>{social.href}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='downloadbtn'>
          <a href='/assets/images/Nikhil_Duttaroy.pdf' download='Nikhil-Duttaroy Resume'>
            <button className='button'>Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default StackPage;