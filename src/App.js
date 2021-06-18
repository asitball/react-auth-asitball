import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Pick from './components/Pick/Pick';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
    <Router>
       <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/pick/:id'>
            <Login></Login>
          </PrivateRoute>
          <Route path='/login'> 
            <Login></Login>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
