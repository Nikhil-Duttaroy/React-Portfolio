import React from 'react'
import "./StackPage.styles.css"

const StackPage = () => {
  return (
    <section className='S2'>
      <div className='mainContainer'>
        <div className='aboutWrapper'>
          <div className='aboutMe'>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Tech Stack
            </h4>
            <div className='tech_container'>
              <div className='block'>
                <img src='../../assets/images/html.png' alt='' className='icons' />
                <span className='icon_name'>HTML</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/css.png' alt='' className='icons' />
                <span className='icon_name'>CSS</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/js.png' alt='' className='icons' />
                <span className='icon_name'>Javascript</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/React.png' alt='' className='icons' />
                <span className='icon_name'>React JS</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/redux.png' alt='' className='icons' />
                <span className='icon_name'>Redux</span>
              </div>
              <div className='block'>
                <img
                  src='../../assets/images/python.png'
                  alt=''
                  className='icons'
                />
                <span className='icon_name'>Python</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/php.png' alt='' className='icons' />
                <span className='icon_name'>PHP</span>
              </div>

              <div className='block'>
                <img
                  src='../../assets/images/firebase.png'
                  alt=''
                  className='icons'
                />
                <span className='icon_name'>Firebase</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/sql.png' alt='' className='icons' />
                <span className='icon_name'>MySQL</span>
              </div>
              <div className='block'>
                <img
                  src='../../assets/images/mongodb.png'
                  alt=''
                  className='icons'
                />
                <span className='icon_name'>MongoDb</span>
              </div>
              <div className='block'>
                <img src='../../assets/images/figma.png' alt='' className='icons' />
                <span className='icon_name'>Figma</span>
              </div>
            </div>
          </div>

          <div className='socialLinks'>
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Social Media Links
            </h4>
            <div className='social_container'>
              <div className='social_block'>
                <img
                  src='../../assets/images/github.png'
                  alt=''
                  className='social_img'
                />
                <a href='https://github.com/Nikhil-Duttaroy' target='_blank'>
                  <span className='social_name'>
                    https://github.com/Nikhil-Duttaroy
                  </span>
                </a>
              </div>
              <div className='social_block'>
                <img
                  src='../../assets/images/linkedin.png'
                  alt=''
                  className='social_img'
                />
                <a
                  href='https://www.linkedin.com/in/nikhil-duttaroy/'
                  target='_blank'
                >
                  <span className='social_name'>
                    https://www.linkedin.com/in/nikhil-duttaroy/
                  </span>
                </a>
              </div>
              <div className='social_block'>
                <img
                  src='../../assets/images/blog.png'
                  alt=''
                  className='social_img'
                />
                <a href='https://blogsbynikhil.netlify.app/' target='_blank'>
                  <span className='social_name'>
                    https://blogsbynikhil.netlify.app/
                  </span>
                </a>
              </div>
              <div className='social_block'>
                <img
                  src='../../assets/images/gmail.png'
                  alt=''
                  className='social_img'
                />
                <a href='mailto: nsdr2000@gmail.com' target='_blank'>
                  <span className='social_name'>nsdr2000@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='downloadbtn'>
          <a
            href='/assets/images/Nikhil_Duttaroy.pdf'
            download='Nikhil-Duttaroy Resume'
          >
            <button className='button'>Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default StackPage