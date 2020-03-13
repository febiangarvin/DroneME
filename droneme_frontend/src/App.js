import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register'
import About from './pages/about'
import Reviews from './pages/reviews'
import FAQ from './pages/faq'
import NotFound from './pages/notfound';
import DroneProducts from './pages/droneproducts'
import AccessoriesProducts from './pages/accessoriesproducts'
import DroneAccessoriesProducts from './pages/droneaccessoriesproducts'
import CustomDroneBodyProducts from './pages/customdronebodyproducts';
import CustomDroneWingProducts from './pages/customdronewingproducts';
import CustomDroneMotorProducts from './pages/customdronemotorproducts';
import CustomDroneBatteryProducts from './pages/customdronebatteryproducts';
import AdminDashboard from './pages/admindashboard';
import AdminDroneProducts from './pages/admindroneproducts';
import AdminDroneAccessoriesProducts from './pages/admindroneaccessoriesproducts';
import AdminAccessoriesProducts from './pages/adminaccesoriesproducts';
import AdminManageProducts from './pages/adminmanageproducts'
import AdminAddProducts from './pages/adminaddproducts';
import AdminSales from './pages/adminsales';
import AdminSalesDetail from './pages/adminsalesdetail';
import AdminEdit from './pages/adminedit';
import FlyaDrone from './pages/flyadrone';
import AssembleaDrone from './pages/assembleadrone';
import RepairaDrone from './pages/repairadrone';
import Cart from './pages/cart';

import { Switch, Route } from 'react-router-dom'
import { KeepLogin, UserGetCart } from './redux/actions'
import { useDispatch } from 'react-redux';

const App = () => {

  // //set dispatch
  const dispatch = useDispatch()

  // //component didmount
  useEffect(() => {
    dispatch(KeepLogin())
    dispatch(UserGetCart())
  }, [])

  return (
    <div>
      <Switch>
        <Route path={'/'} exact component={Home}>
          <Home />
        </Route>
        <Route path={'/login'} exact component={Login} />
        <Route path={'/register'} exact component={Register} />

        <Route path={'/droneproducts'} exact component={DroneProducts} />
        <Route path={'/droneaccessoriesproducts'} exact component={DroneAccessoriesProducts} />
        <Route path={'/accessoriesproducts'} exact component={AccessoriesProducts} />

        <Route path={'/customdronebodyproducts'} exact component={CustomDroneBodyProducts} />
        <Route path={'/customdronewingproducts'} exact component={CustomDroneWingProducts} />
        <Route path={'/customdronemotorproducts'} exact component={CustomDroneMotorProducts} />
        <Route path={'/customdronebatteryproducts'} exact component={CustomDroneBatteryProducts} />

        <Route path={'/flyadrone'} exact component={FlyaDrone} />
        <Route path={'/assembleadrone'} exact component={AssembleaDrone} />
        <Route path={'/repairadrone'} exact component={RepairaDrone} />

        <Route path={'/about'} exact component={About} />
        <Route path={'/reviews'} exact component={Reviews} />
        <Route path={'/faq'} exact component={FAQ} />

        <Route path={'/cart'} exact component={Cart} />

        <Route path={'/admindashboard'} exact component={AdminDashboard} />
        <Route path={'/admindroneproducts'} exact component={AdminDroneProducts} />
        <Route path={'/admindroneaccessoriesproducts'} exact component={AdminDroneAccessoriesProducts} />
        <Route path={'/adminaccessoriesproducts'} exact component={AdminAccessoriesProducts} />
        <Route path={'/adminmanageproducts'} exact component={AdminManageProducts} />
        <Route path={'/adminaddproducts'} exact component={AdminAddProducts} />
        <Route path={'/adminsales'} exact component={AdminSales} />
        <Route path={'/adminsalesdetail'} exact component={AdminSalesDetail} />
        <Route path={'/adminedit'} exact component={AdminEdit} />
        <Route path={'/*'} exact component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;