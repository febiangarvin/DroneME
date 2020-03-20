import React, { useEffect } from 'react';

import Cart from './cart'
import Checkout from './checkout'

import { Switch, Route } from 'react-router-dom'

const UserTransaction = ({ match }) => { // //props match untuk mengambil link user transaction, agar masuk ke dalam user transaction
    return (
        <div>
            <Route path={`${match.url}/cart`} component={Cart} />
            <Route path={`${match.url}/checkout`} component={Checkout} />
        </div>
    )
}

export default UserTransaction;
