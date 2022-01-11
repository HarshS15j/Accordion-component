import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./utils/data";

const App = () => {

return (
  <div>
    <h1>React Accordion Open to right</h1>
    <div className="accordion">
      {accordionData.map((item, index) => (
        
        <Accordion title={item.title} content={item.content} index={index} >

        </Accordion>

      ))}
    </div>
  </div>
);

};

export default App;


// Functionality to open accordion items depending on each other

//import { useState } from "react";
//import { useEffect } from "react";

//  const [isActive, setIsActive] = useState([]);
//const isActive = true;
//const [allinactive, setAllinactive] = useState(false);

// useEffect(()=>{
//   const defaultStates = [];
//   for(let i=0; i<accordionData.length;i++){
//     defaultStates.push(false);
//   };
  
//   setIsActive(defaultStates);
// },[]);


// const changetoActive = (index) => {
//   const newStates =[];
//   let currIndex = parseInt(index); 
  
//   if(isActive[currIndex]===true){
//     for(let i=0; i<accordionData.length;i++){
//       newStates.push(false);
    
//     };
//     setIsActive(newStates);

//   }else{
  
//   for(let i=0; i<accordionData.length;i++){
//     if(i<=currIndex){
//       newStates.push(true);  
//     }else{
//     newStates.push(false);
//   }
//   };
//   setIsActive(newStates);
// }
//   //setAllinactive(false);
// };

// <div id={index} className="accordion-item">
//   {/* <div className="accordion-title" onClick={() => changetoActive(index)}> */}
//   <div className="accordion-title">
//     <div>{item.title}</div>
//     <div className="plus-minus">{isActive? "-" : "+"}</div>
//   </div>
//   {isActive && (
//     <div className="accordion-content">{item.content}</div>
//   )}
// </div>

//<Accordion title={item.title} content={item.content} index={index} />