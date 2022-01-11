import React, { useState } from 'react';

const Accordion = ({ title, content, index, key, dir }) => {
  const [isActive, setIsActive] = useState(false);

  //const [allinactive, setAllinactive] = useState(false);

  let symbol = 0;
  if(dir==="up"){
    symbol="^"
  }else if(dir==="down"){
    symbol="V"
  }else if(dir==="right"){
    symbol=">"
  }else{
    symbol="<"
  }
  const changetoActive = ()=>{

    setIsActive(!isActive);
    //setAllinactive(false);

  }

  return (
    <div id = {index} key = {index} className={`accordion-item-${dir}`}>
      <div className="accordion-title" onClick={() => changetoActive()}>
        <div>{title}</div>
        <div className='symbol'>{(isActive) ? '-' : symbol}</div>
      </div>
      {(isActive) && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;