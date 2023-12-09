import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { usePasswordContext } from '../../context/PasswordContext';

const Slider = () => {
    const {passwordLength, handleSliderChange} = usePasswordContext();
    
    const handleSliderValue = (value:number) => {
      return handleSliderChange(value);
    };
    
    return (
      <div>
        <ReactSlider
          className="relative font-extrabold horizontal-slider"
          thumbClassName="bg-blue-500 text-xs rounded-full text-white -top-3 cursor-grab focus:outline-none focus-within:outline-none h-[24px] w-[24px] flex items-center justify-center"
          trackClassName="bg-blue-500 rounded-full track pb-[2px]" 
          max={32}
          min={8}
          onAfterChange={handleSliderValue}
          defaultValue={passwordLength}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
      </div>
    )
}

export default Slider;