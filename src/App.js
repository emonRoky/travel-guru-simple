import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import BookHotel from './Components/BookHotel/BookHotel';
import Login from './Components/LoginRegester/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setloggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser,setloggedInUser]}>
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path="/destination/:destinationName">
            <Booking></Booking>
          </Route>
          <PrivateRoute path='/Hotel/:destinationName'>
            <BookHotel></BookHotel>
          </PrivateRoute>
          <Route path='/login'>
           <Login></Login>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
