import Game from "./gameScripts/game";
import Gui from "./gameScripts/gui";
import "./Assets/heroShip.png";
import "./Assets/EnemyAsteroidLarge.png";
import "./Assets/EnemyAsteroid.png";
import "./Assets/EnemyAsteroidSmall.png";
import "./Assets/laser.mp3"
import "./Assets/boom.mp3"
let game = new Game()
window.gui = new Gui(game);

window.onload = function() {
    console.log("Loading...")
    window.gui.load([
        { id: "player-img", var: document.createElement("img"), file: "./Assets/heroShip.png"},
        { id: "asteroid-large", var: document.createElement("img"), file: "./Assets/EnemyAsteroidLarge.png"},
        { id: "asteroid-img", var: document.createElement("img"), file: "./Assets/EnemyAsteroid.png"},
        { id: "asteroid-small", var: document.createElement("img"), file: "./Assets/EnemyAsteroidSmall.png"},
        { id: "laser-audio", var: document.createElement("audio"), file: "./Assets/laser.mp3"},
        { id: "boom-audio", var: document.createElement("audio"), file: "./Assets/boom.mp3"},
    ])
}
window.onresize = function() {
    console.log('Resizing...');
    window.gui.resize();
}