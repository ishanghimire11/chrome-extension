import React from 'react';
import MyToggle from './Toggle';

const Customize = ({option}) => {
  return (
    <div className='flex justify-between px-4 py-2 rounded-sm gap-x-4 bg-slate-700'>
        <p className="option-name">{option.name}</p>
        <MyToggle index={option.key}/>
    </div>
  )
}

export default Customize