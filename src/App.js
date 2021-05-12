import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddDoctor from './Componants/AddDoctor/AddDoctor';
import AllPatients from './Componants/AllPatients/AllPatients/AllPatients';
import Appointment from './Componants/Appointment/Appointment/Appointment';
import Dashboard from './Componants/Dashboard/Dashboard/Dashboard';
import Home from './Componants/Home/Home/Home';
import Login from './Componants/Login/Login/Login';
import PrivateRoute from './Componants/Login/PrivateRoute/PrivateRoute';
import Prescriptions from './Componants/Dashboard/Prescriptions/Prescriptions';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/allPatients">
              <AllPatients></AllPatients>
            </PrivateRoute>

            <PrivateRoute path="/prescriptions">
              <Prescriptions></Prescriptions>
            </PrivateRoute>

            <Route path="/patient">
              <AllPatients></AllPatients>
            </Route>


            <Route path="/addDoctor">
              <AddDoctor></AddDoctor>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
