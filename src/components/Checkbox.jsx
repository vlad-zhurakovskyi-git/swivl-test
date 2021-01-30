import React, { useState } from 'react';

const Checkbox = ({isChecked, textLeft, textRight}) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <label className={`checkbox ${checked ? 'checked' : ''}`}>
      <input onChange={() => setChecked(!checked)} className="checkbox__input" type="checkbox"/>
      <div className="checkbox__block"/>
      <div className="checkbox__text checkbox__text--left">{textLeft}</div>
      <div className="checkbox__text checkbox__text--right">{textRight}</div>
    </label>
  );
};

export default Checkbox;
