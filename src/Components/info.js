import React from 'react';
import { personalInfo } from '../info';
import parse from 'html-react-parser';

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className='info__item' key={index}>
            <span className='info__title'>{title}</span>
            <span className='info__description'>
              {typeof description === 'object' ? (
                <>
                  <a href={parse(description.link)}>{parse(description.label)}</a>
                  {description.icon}
                </>
              ) : (
                description
              )}
            </span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
