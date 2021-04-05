import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
   
    <Router>
       <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/destination'> 
            <Destination></Destination>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
              <NoMatch></NoMatch>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
