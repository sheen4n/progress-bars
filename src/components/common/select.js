import React from 'react';

const Select = ({ dataSet, onChange, value }) => {
  return (
    <div className='select is-fullwidth'>
      <select onChange={onChange} value={value}>
        {dataSet.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
