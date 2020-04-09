import React from 'react';

const ProgressBar = ({ value, maximum, isSelected = false }) => {
  const actualPercent = value / maximum;
  const percentText = (actualPercent * 100).toFixed(2);
  const textColorClass = actualPercent < 0.5 ? 'has-text-black' : 'has-text-white';
  const progressColorClass = actualPercent > 1 ? 'is-danger' : 'is-link';

  return (
    <div className='progress-wrapper'>
      <progress className={`progress is-large ${progressColorClass} ${isSelected && 'is-selected'}`} value={value} max={maximum} />
      <p className={`progress-value ${textColorClass}`}>
        {percentText}% ({value}/{maximum})
      </p>
    </div>
  );
};

export default ProgressBar;
