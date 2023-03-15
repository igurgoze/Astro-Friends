import React, {useRef} from 'react';
import "../../gameIndex.css"
import Game from '../../gameScripts/game';
import GameLoop from '../../gameScripts/gameloop';
import StartImg from "../../Assets/Start_Splash.png";
import EndImg from "../../Assets/End_Splash.png";

export default function Home() {
  //const canvasRef = useRef();

  const funcForOnClick = () => {
    window.gui.startGame();
  }

  const canvasRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  let game = new Game();

  class Gui {

    constructor(game) {
        this.cnv = null;
        this.ctx = null;
        this.resources = null;
        this.resourcesToLoad = 0;
        this.gameloop = new GameLoop(game);
    }

    resize() {
        if ( this.cnv ) {
            this.cnv.width = window.innerWidth;
            this.cnv.height = window.innerHeight;
        }
    }

    prepareCanvas() {
        this.cnv = canvasRef.current;
        this.ctx = canvasRef.current.getContext("2d");

        this.resize();
    }

    toggleScreen(id, toggle) {
      let element;
      switch(id) {
        case "canvas":
          element = canvasRef.current;
          break;
        case "start":
          element = startRef.current;
          window.canvasElement = canvasRef.current;
          window.cantexElement = canvasRef.current.getContext('2d');
          break;
        default:
          element = endRef.current;
          break;
      }
        let display = ( toggle ) ? "block" : "none";
        element.style.display = display;
    }

    closeAllScreens() {
        let elements = document.querySelectorAll(".screen");
        [...elements].forEach( e => {
            e.style.display = "none";
        });
    }

    showScreen(id) {
        this.closeAllScreens();
        this.toggleScreen(id, true);
    }

    launchIfReady() {
        this.resourcesToLoad--;
        if(this.resourcesToLoad == 0){
            this.prepareCanvas();
            this.showScreen("start");
        }
    }

    async beginLoadingImage(imgVar, fileName){
        console.log("An image is being loaded...", fileName);
        imgVar.src = fileName;
        await imgVar.src;
        this.launchIfReady();
    }

    async beginLoadingAudio(audioVar, fileName){
        console.log("A sound is being loaded...", fileName);
        audioVar.src = fileName;

        await audioVar.src;
        this.launchIfReady();
    }

    load(resources) {
        if( !resources || resources.length == 0) {
            this.prepareCanvas();
            this.showScreen("start");
            return;
        }

        if(resources) {
            this.resources = resources;
            this.resourcesToLoad = this.resources.length;

            for(let i = 0; i<this.resources.length; i++) {
                if(this.resources[i].var != undefined){
                    if(this.resources[i].var.nodeName == "IMG") {
                        this.beginLoadingImage(
                            this.resources[i].var,
                            this.resources[i].file);
                    }

                    if(this.resources[i].var.nodeName == "AUDIO") {
                        console.log(this.resources[i].file)
                        this.beginLoadingAudio(
                            this.resources[i].var,
                            this.resources[i].file);
                    }
                }
            }
        }
    }

    getResource(id){
        return this.resources.filter(r => r.id === id)[0].var;
    }

    getResources() {
        return this.resources;
    }

    startGame() {
        this.prepareCanvas();
        this.showScreen("canvas");
        this.gameloop.start();
    }

    stopGame() {
        this.showScreen("end");
        this.gameloop.stop();
    }
}
  window.gui = new Gui(game);

  return (
    <div>
      <h1>Are you ready to rock!?</h1>
      <div className="fixed"><span>Score: </span><span id="scoreEl">0</span></div>
      <canvas ref={canvasRef} id="canvas" style={{display: "none"}}></canvas>
      <div id="load" className="screen" style={{display: "block"}}>
        Loading, Please Wait...
      </div>
      <div ref={startRef} id="start" className="screen" style={{display: "none"}}>
        <img src={StartImg} alt='this is the home screen.'/>
        <button onClick={funcForOnClick}>Let's Play!</button>
      </div>
      <div ref={endRef} id="end" className="screen" style={{display: "none"}}>
        <img src={EndImg} alt='The Game has ended.'/>
        <button onClick={funcForOnClick}>Play Again!</button>
      </div>
    </div>
  );
}
