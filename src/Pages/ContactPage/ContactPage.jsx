import React from 'react'
import './ContactPage.styles.css'

const ContactPage = () => {
  return (
    <section className='S2' id="contact">
      <div className='mainContainer'>
        <h3 style={{ textAlign: "center", marginTop: "1rem" }}>Contact Form</h3>

        <form
          id='contact-form'
          action='POST'
          name='ContactForm'
          data-netlify='true'
          data-netlify-recaptcha='true'
          netlify-honeypot='bot-field'
        >
          <label>Name</label>
          <input
            required
            className='input-field'
            type='text'
            name='name'
            placeholder='Guest'
          />

          <label>Subject</label>
          <input required className='input-field' type='text' name='subject' placeholder='I want a XYZ'/>

          <label>Email</label>
          <input required className='input-field' type='text' name='email' placeholder='Guest@email.com'/>

          <label>Message</label>
          <textarea required className='input-field' name='message' placeholder='Your Message'></textarea>

          <p className='hidden' style={{visibility: 'hidden', height: '0'}}>
            <label>
              Don’t fill this out if you're human: <input name='bot-field' />
            </label>
          </p>

          <div data-netlify-recaptcha='true'></div>
          <div className='buttonContainer'>
            <button id='submit-btn' type='submit' value='Send'>
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage