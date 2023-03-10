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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AstoFriends />}>
      <Route index element={<Home />} />
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
