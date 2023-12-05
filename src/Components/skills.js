import React from 'react';
import { Skills } from '../info';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = () => {
  return (
    <>
        {Skills.map(({title,percentage},index)=>{
            return(
                <div className='progress__box' key={index}>
                    <div className='progress__circle'>
                        <CircularProgressbar 
                        strokeWidth={2.5} 
                        text={`${percentage}%`}
                        value={percentage}
                        />
                    </div>
                    <h3 className='skills__title'>{title}</h3>
                </div>
            )
        })}
    </>
  )
};

export default skills;