import React, { useState } from 'react';

const Accordion = ({ title, content, index }) => {
  const [isActive, setIsActive] = useState(false);

  //const [allinactive, setAllinactive] = useState(false);

  const changetoActive = ()=>{

    setIsActive(!isActive);
    //setAllinactive(false);

  }

  return (
    <div id = {index} className="accordion-item">
      <div className="accordion-title" onClick={() => changetoActive()}>
        <div>{title}</div>
        <div>{(isActive) ? '-' : '+'}</div>
      </div>
      {(isActive) && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;