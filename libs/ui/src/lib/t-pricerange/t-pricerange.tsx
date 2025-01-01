import React, { useState } from 'react';

interface TPriceRangeProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export const TPriceRange: React.FC<TPriceRangeProps> = ({ min, max, onChange }) => {
  const [value, setValue] = useState<number>(min);
  const [thumbPosition, setThumbPosition] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);

    // Calculate thumb position based on slider width
    const sliderWidth = event.target.offsetWidth;
    const newThumbPosition = (newValue - min) / (max - min) * sliderWidth;
    setThumbPosition(newThumbPosition);
  };

  return (
    <div className="t-price-range" style={{ width: '100%', maxWidth: '600px', margin: 'auto', position: 'relative' }}>
      
      <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="slider"
          style={{
            margin: '0 5px',
            height: '8px',
            appearance: 'none',
            borderRadius: '10px',
            background: '#ccc',
            outline: 'none',
            width: '100%',
            position: 'relative',
          }}
        />

        {/* Positioned price value below the thumb */}
        <p
          style={{
            position: 'absolute',
            left: `${thumbPosition}px`,
            top: '25px',  // Adjusted the gap to bring the value closer to the slider
            transform: 'translateX(-50%)',
            margin: 0,
            textAlign: 'center',
            fontSize: '14px',
            color: 'black',  // Changed to black
          }}
        >
          {value}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '5px' }}>
          <span style={{ fontSize: '14px' }}>{min}</span>
        </div>
      </label>

      {/* Additional CSS to customize the thumb */}
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 15px;
            height: 15px;
            background: #F1414F;
            border: none;
            border-radius: 0;
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            width: 15px;
            height: 15px;
            background: #F1414F;
            border: none;
            border-radius: 0;
            cursor: pointer;
          }
          input[type="range"]::-ms-thumb {
            width: 15px;
            height: 15px;
            background: #F1414F;
            border: none;
            border-radius: 0;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default TPriceRange;
