import React, { useState } from 'react';
import ProgressBar from './common/progressBar';
import Select from './common/select';
import ButtonsGroup from './buttonsGroup';

const ProgressBars = ({ buttons, barsData, limit }) => {
  const [selectedBar, setSelectedBar] = useState('0');
  const [bars, setBars] = useState(barsData);

  const buttonsList = [...buttons].sort((a, b) => a - b);

  const handleSelectBar = (e) => {
    setSelectedBar(e.currentTarget.value);
  };

  const handleClickButton = (change) => () => {
    const updatedValue = bars[selectedBar].value + change >= 0 ? bars[selectedBar].value + change : 0;
    const updatedBars = bars.map((bar) => (bar.id === selectedBar ? { ...bar, value: updatedValue } : bar));
    setBars(updatedBars);
  };

  return (
    <section className='section'>
      <h1 className='title'>Progress Bars</h1>

      <div className='card'>
        <div className='card-content'>
          {bars.map(({ id, value }) => (
            <ProgressBar key={id} value={value} maximum={limit} isSelected={id===selectedBar}/>
          ))}
        </div>
      </div>

      <div className='level columns'>
        <div className='column is-one-third'>
          <Select dataSet={bars} onChange={handleSelectBar} value={selectedBar} />
        </div>
        <div className='column'>
          <ButtonsGroup buttons={buttonsList} onClickButton={handleClickButton} />
        </div>
      </div>
    </section>
  );
};

export default ProgressBars;
