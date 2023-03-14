import React from 'react';
import "../../gameIndex.css"

export default function Home(funcForOnClick) {
  return (
    <div>
      <h1>Are you ready to rock!?</h1>
      <div className="fixed"><span>Score: </span><span id="scoreEl">0</span></div>
      <canvas id="canvas" style={{display: "none"}}></canvas>
      <div id="load" className="screen" style={{display: "block"}}>
        Loading, Please Wait...
      </div>
      <div id="start" className="screen" style={{display: "none"}}>
        <img src="Assets/Start_Splash.png" alt='this is the home screen.'/>
        <button onClick={funcForOnClick}>Let's Play!</button>
      </div>
      <div id="end" className="screen" style={{display: "none"}}>
        <img src="Assets/End_Splash.png" alt='The Game has ended.'/>
        <button onClick={funcForOnClick}>Play Again!</button>
      </div>
    </div>
  );
}
