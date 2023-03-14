import React from "react";
import AstoFriends from "./components/AstoFriends";
import Home from './components/pages/Home';
import About from './components/pages/About';
import FriendsList from "./components/pages/FriendsList";
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import "./gameScripts/particle.js";
import "./gameScripts/projectile.js";
import "./gameScripts/asteroids.js";
import "./gameScripts/keyhandler.js";
import "./gameScripts/player.js";
import "./gameScripts/fx.js";
import Game from "./gameScripts/game.js";
import "./gameScripts/gameloop.js";
import Gui from "./gameScripts/gui.js";
import "./gameIndex.js";
let game = new Game()
window.gui = new Gui(game)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AstoFriends />}>
      <Route index element={<Home funcForOnClick={window.gui.startGame()}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/FriendsList" element={<FriendsList />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Route>
  )
)

const App = () => (
  <RouterProvider router={router}>
    <AstoFriends />
  </RouterProvider>
);

export default App;
