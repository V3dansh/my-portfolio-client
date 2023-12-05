import React from 'react';
import Info from '../../Components/info';
import Stats from './../../Components/Stats'
import { FaDownload } from 'react-icons/fa';
import CV from '../../Assets/Srijal_Vedansh_Resume_August.pdf';
import Skills from '../../Components/skills';
import './About.css';
import { Resume } from '../../info';
import ResumeItem from './../../Components/ResumeItem';

const About = () => {
  return (
    <>
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>
          About
          <span> Me</span>
        </h2>
        <div className='about__container grid'>
          <div className='about__info'>
            <h3 className='section__subtitle'>
              Personal Info
            </h3>
            <ul className='info__list grid'>
              <Info/>
            </ul>

            <a href={CV} download='' className='button'>
              Download CV
              <span className='button__icon'><FaDownload/></span>
            </a>
          </div>
          <div className='stats grid'>
            <Stats/>
          </div>
        </div>
      </section>
      <div className='seperator'></div>
      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>
          My Skills
        </h3>
        <div className='skills__container grid'>
          <Skills/>
        </div>
      </section>
      <div className='seperator'></div>
      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Experience & Education
        </h3>
        <div className='resume__container grid'>
          <div className='resume__data'>
            {Resume.map((val)=>{
              if(val.category==='experience'){
                return < ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>
          <div className='resume__data'>
            {Resume.map((val)=>{
              if(val.category==='education'){
                return <ResumeItem key={val.id} {...val}/>;
              }
            })}
          </div>
        </div>
      </section>
    </main>
    </>
  )
};

export default About;