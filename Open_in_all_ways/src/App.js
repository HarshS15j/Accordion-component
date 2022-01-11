import React, { useState } from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/data';

const App = () => {

  const[direc ,setDirec] = useState("down");


  return (
    <div>
      <h1>React Multiple Open Accordion</h1>

      <div className='buttons'>
      <button onClick={()=>setDirec("up")}>UP</button>
      <button onClick={()=>setDirec("down")}>DOWN</button>
      <button onClick={()=>setDirec("left")}>LEFT</button>
      <button onClick={()=>setDirec("right")}>RIGHT</button>
      </div>

      <div className="accordion">
        {accordionData.map((item,index) => (
          <Accordion title={item.title} content={item.content} index={index} key={index} dir={direc} />
        ))}
      </div>
    </div>
  );
};

export default App;