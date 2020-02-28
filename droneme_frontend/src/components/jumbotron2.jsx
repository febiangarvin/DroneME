import React, { Component } from 'react';
import product1 from '../components/support/img/product1.png'
import product2 from '../components/support/img/product2.png'
import { FaShoppingBasket } from "react-icons/fa";

class Jumbotron2 extends Component {
    state = {}
    render() {
        return (
            <div className='jumbotron2'>
                <div className="row">
                    <div className="col-md-6 produk">
                        <img className='d-block w-100' src={product1} alt='drone' />
                        <div className="produk-caption">
                            <h2><span>Shop The Latest Drones</span></h2>
                            <br />
                            <h3><span>DJI Phantom 4 Pro is available today!</span></h3>
                            <br /><br />
                            <a href='/droneproducts' className="btn-big">Shop Drones <FaShoppingBasket /></a>
                        </div>
                    </div>
                    <div className="col-md-6 produk">
                        <img className='d-block w-100' src={product2} alt='goggles' />
                        <div className="produk-caption">
                            <h2><span>Shop The Latest Accessories</span></h2>
                            <br />
                            <h3><span>DJI RE Googles is available today!</span></h3>
                            <br /><br />
                            <a href='/accessoriesproducts' className="btn-big">Shop Accessories <FaShoppingBasket /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron2;