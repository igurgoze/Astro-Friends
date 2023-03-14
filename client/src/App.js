import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  <ApolloProvider client={client}>
  <RouterProvider router={router}>
    <AstoFriends />
  </RouterProvider>
  </ApolloProvider>
);

export default App;
