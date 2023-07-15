import React from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const customStyles = {

  path: {
    stroke: '#646EDA',
  },

  trail: {
    stroke: '#',
  },
  
  text: {
    fill: '#173B3F', 
    fontSize: '12px',
    marginTop: '-5px',
  },
};

const MyCircularProgressbar = ({value,data}:any) => {
  return (
    <CircularProgressbarWithChildren
      value= {value}
      styles={customStyles}
    >
 
      <div style={{ fontSize: 12, marginTop: -5 }}>
        < p className='text-gray-600  text-[1em]'> <span className=' font-semibold'>{value} </span>% {data}</p>
      </div>
    </CircularProgressbarWithChildren>
  )}
  export default MyCircularProgressbar