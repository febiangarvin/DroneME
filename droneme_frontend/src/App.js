import React, { useEffect } from 'react'; // //main import
import './App.css';
import Home from './pages/home';

import Login from './pages/account/login' // //account import
import Register from './pages/account/register'
import UserEdit from './pages/account/useredit';

import AdminDashboard from './pages/admin/admindashboard'; // //admin import
import AdminDroneProducts from './pages/admin/admindroneproducts';
import AdminDroneAccessoriesProducts from './pages/admin/admindroneaccessoriesproducts';
import AdminAccessoriesProducts from './pages/admin/adminaccesoriesproducts';
import AdminAddProducts from './pages/admin/adminaddproducts';
import AdminSales from './pages/admin/adminsales';
import AdminApprovedSales from './pages/admin/adminapprovedsales';
import AdminSalesDetail from './pages/admin/adminsalesdetail';
import AdminApprovedSalesDetail from './pages/admin/adminapprovedsalesdetail';
import AdminManageUsers from './pages/admin/adminmanageusers';

import FlyaDrone from './pages/documentation/flyadrone'; // //documentation import
import AssembleaDrone from './pages/documentation/assembleadrone';
import RepairaDrone from './pages/documentation/repairadrone';

import DroneProducts from './pages/product/droneproducts' // //product import
import AccessoriesProducts from './pages/product/accessoriesproducts'
import DroneAccessoriesProducts from './pages/product/droneaccessoriesproducts'
import CustomDroneBodyProducts from './pages/product/customdronebodyproducts';
import CustomDroneWingProducts from './pages/product/customdronewingproducts';
import CustomDroneMotorProducts from './pages/product/customdronemotorproducts';
import CustomDroneBatteryProducts from './pages/product/customdronebatteryproducts';

import About from './pages/support/about' // //support import
import Reviews from './pages/support/reviews'
// import FAQ from './pages/support/faq'
import NotFound from './pages/support/notfound';

import UserTransaction from './pages/transaction/usertransaction';
// import Cart from './pages/transaction/cart';
// import Checkout from './pages/transaction/checkout';
import Orders from './pages/transaction/orders';
import PaidOrders from './pages/transaction/paidorders';
import OrderDetail from './pages/transaction/orderdetail';
import PaidOrderDetail from './pages/transaction/paidorderdetail';

import { Switch, Route } from 'react-router-dom' // //other components import
import { KeepLogin, UserGetCart } from './redux/actions'
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch() // //set dispatch

  useEffect(() => { // //equivalen dengan component didmount
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
        <Route path={'/useredit'} exact component={UserEdit} />

        <Route path={'/admindashboard'} exact component={AdminDashboard} />
        <Route path={'/admindroneproducts'} exact component={AdminDroneProducts} />
        <Route path={'/admindroneaccessoriesproducts'} exact component={AdminDroneAccessoriesProducts} />
        <Route path={'/adminaccessoriesproducts'} exact component={AdminAccessoriesProducts} />
        <Route path={'/adminaddproducts'} exact component={AdminAddProducts} />
        <Route path={'/adminsales'} exact component={AdminSales} />
        <Route path={'/adminapprovedsales'} exact component={AdminApprovedSales} />
        <Route path={'/adminsalesdetail/:idtransactions'} exact component={AdminSalesDetail} />
        <Route path={'/adminapprovedsalesdetail/:idtransactions'} exact component={AdminApprovedSalesDetail} />
        <Route path={'/adminmanageusers'} exact component={AdminManageUsers} />

        <Route path={'/flyadrone'} exact component={FlyaDrone} />
        <Route path={'/assembleadrone'} exact component={AssembleaDrone} />
        <Route path={'/repairadrone'} exact component={RepairaDrone} />

        <Route path={'/droneproducts'} exact component={DroneProducts} />
        <Route path={'/droneaccessoriesproducts'} exact component={DroneAccessoriesProducts} />
        <Route path={'/accessoriesproducts'} exact component={AccessoriesProducts} />
        <Route path={'/customdronebodyproducts'} exact component={CustomDroneBodyProducts} />
        <Route path={'/customdronewingproducts'} exact component={CustomDroneWingProducts} />
        <Route path={'/customdronemotorproducts'} exact component={CustomDroneMotorProducts} />
        <Route path={'/customdronebatteryproducts'} exact component={CustomDroneBatteryProducts} />

        <Route path={'/usertransaction'} component={UserTransaction} />
        {/* <Route path={'/cart'} exact component={Cart} /> */}
        {/* <Route path={'/checkout'} exact component={Checkout} /> */}
        <Route path={'/orders'} exact component={Orders} />
        <Route path={'/paidorders'} exact component={PaidOrders} />
        <Route path={'/orderdetail/:idtransactions'} exact component={OrderDetail} />
        <Route path={'/paidorderdetail/:idtransactions'} exact component={PaidOrderDetail} />

        <Route path={'/about'} exact component={About} />
        <Route path={'/reviews'} exact component={Reviews} />
        {/* <Route path={'/faq'} exact component={FAQ} /> */}
        <Route path={'/*'} exact component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;