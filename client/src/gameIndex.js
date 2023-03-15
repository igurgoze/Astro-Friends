import heroShip from"./Assets/heroShip.png";
import EnemyAsteroidLarge from "./Assets/EnemyAsteroidLarge.png";
import EnemyAsteroid from "./Assets/EnemyAsteroid.png";
import EnemyAsteroidSmall from "./Assets/EnemyAsteroidSmall.png";
import laser from "./Assets/laser.mp3"
import boom from "./Assets/boom.mp3"

window.onload = function() {
    console.log("Loading...")
    window.gui.load([
        { id: "player-img", var: document.createElement("img"), file: heroShip},
        { id: "asteroid-large", var: document.createElement("img"), file: EnemyAsteroidLarge},
        { id: "asteroid-img", var: document.createElement("img"), file: EnemyAsteroid},
        { id: "asteroid-small", var: document.createElement("img"), file: EnemyAsteroidSmall},
        { id: "laser-audio", var: document.createElement("audio"), file: laser},
        { id: "boom-audio", var: document.createElement("audio"), file: boom},
    ])
}
window.onresize = function() {
    console.log('Resizing...');
    window.gui.resize();
}