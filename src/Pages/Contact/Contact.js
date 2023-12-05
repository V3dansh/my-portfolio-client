import React, { useState } from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub
}from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';
const Contact = () => {


  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState("");

  const sendEmail=async(e)=>{
    e.preventDefault();
    try {
      const res = await fetch("https://my-portfolio-server-o1uq.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });      
      if (res.ok) {
        window.alert("Email sent successfully!");
        // Reset the form fields if needed
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        console.error("Email sending failed.");
      }
    } 
    
    catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <>
      <section className='contact section'>
        <h2 className='section__title'>
          Get in <span>Touch</span>
        </h2>
        <div className='contact__container container grid'>
          <div className='contact__data'>
            <h3 className='contact__title'>Don't be shy!</h3>
            <p className='contact__desc'>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunites.
            </p>
            <div className='contact__info'>
              <div className='info__item'>
                <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>
                  <a href='mailto:srijal.vedansh7@gmail.com'>srijal.vedansh7@gmail.com</a>
                </h4>
              </div>
          </div>
          <div className='info__item'>
                <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>
                  <a href='tel:+918581044826'>+91-8581044826</a>
                </h4>
              </div>
          </div>
        </div>
        <div className='contact__socials'>
          <a href='https://www.linkedin.com/in/srijal-vedansh-40a50a1b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0GaM2xxzQ0arviQ4yyZH6A%3D%3D' className='contact-social-link'>
            <FaLinkedin/>
          </a>
          <a href='https://github.com/V3dansh' className='contact-social-link'>
            <FaGithub/>
          </a>
          <a href='https://twitter.com/_V3dansh' className='contact-social-link'>
            <FaTwitter/>
          </a>
        </div>
      </div>
      <form className='contact__form'>
        <div className='form__input-group'>
          <div className='form-input-div'>
            <input
              type='text'
              placeholder='Your Name'
              className='form__control'
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='form-input-div'>
            <input
              type='email'
              placeholder='Your Email'
              className='form__control'
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='form-input-div'>
            <input
              type='text'
              placeholder='Your Subject'
              className='form__control'
              name="subject"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className='form__input-div'>
          <textarea
            placeholder='Your Message'
            className='form__control textarea'
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type='submit' className='button' onClick={sendEmail}>
          Send Message
          <span className='button__icon contact__button__icon'>
            <FiSend/>
          </span>
        </button>
      </form>
    </div>
      </section>
    </>
  )
}
export default Contact;