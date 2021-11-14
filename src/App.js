import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,}from "react-router-dom";
import Dashboard from './Pages/Dashboard/DashboardHome/Dashboard';
import HomepageRoot from './Pages/HomePage/Root/HomepageRoot';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/ManageUser/Login';
import Register from './Pages/ManageUser/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

  

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <HomepageRoot></HomepageRoot>
          </Route>

          
          <Route exact path="/home">
            <HomepageRoot></HomepageRoot>
          </Route>
          <Route path="/home/placeorder/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='/home/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/login'>
               <Login></Login>
            </Route>
          <Route path='/register'>
              <Register></Register>
            </Route>
          
           
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
          
      </Router>
      </AuthProvider>
     
     
    </div>


      
  );
}

export default App;
  











