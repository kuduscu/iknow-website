import React from 'react';
import './FloatingDiv.css';
function FloatingDiv({image,txt1,txt2}) {

    /*introdan alınan image propsunu img nin src'sine veriyoruz*/ 
  return (
   <div className="floatingdiv">
    <img src={image} alt=''></img>
    <span>
        {txt1}
        <br/>
        {txt2}
    </span>
   </div>
  )
}

export default FloatingDiv