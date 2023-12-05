import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";
import Profile from "../../Assets/profile_photo-fotor-2023081324610.jpg"

const Home = () => {
  return (
    <>
    <section className='home section grid'>
      <img
        src={Profile}
        alt='Placeholder'
        className='home__img'
      />
      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Srijal Vedansh</span>
            <h5>Web Designer</h5>
          </h1>
          <p className='home__desc'>
            I'm a 4th-year undergraduate student at Kalinga Institute of Industrial Technology (KIIT) pursuing degree in IT, my interests lie in Web development and Machine Learning. I am highly
            organized, curious, and seeking opportunities related to these fields.
          </p>
          <Link to='/about' className='button'>
            More about me{''}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
    </section>
        </>
  );
};

export default Home;
