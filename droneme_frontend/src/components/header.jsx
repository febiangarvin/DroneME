import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux'
import { LogoutAction } from './../redux/actions/authactions'
import { FaUserAstronaut, FaUserSecret, FaShoppingCart, FaUserEdit, FaSignOutAlt, FaRegEdit, FaPlane, FaCashRegister } from "react-icons/fa"
import Logo from '../components/support/img/icons/logo.png'

// //============================== FUNCTION VARIABLES ==================================================// //

const Logoutbtn = () => {
    localStorage.removeItem('droneme')
    this.props.LogoutAction()
}

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // //=============================== RENDER ========================================================// //

    return (
        <div>
            <Navbar expand='md' className='topHeader'>
                <NavbarBrand href="/">
                    <div className='nav-logo'>
                        <img src={Logo} alt='logo' />
                        droneME
                    </div>
                </NavbarBrand>

                {/* //================================ HEADER LEFT ====================================// */}

                <Nav navbar className='menuHeader-left'>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className='linkHeader'>
                            Products
                                    </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href='/droneproducts' className='dropdownHeader'> Drones</DropdownItem>
                            <DropdownItem href='/droneaccessoriesproducts' className='dropdownHeader'> Drone Parts</DropdownItem>
                            <DropdownItem href='/accessoriesproducts' className='dropdownHeader'> Accessories</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className='linkHeader'>
                            Documentations
                                    </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href='/droneproducts' className='dropdownHeader'> Flying a Drone</DropdownItem>
                            <DropdownItem href='/droneproducts' className='dropdownHeader'> Building a Drone</DropdownItem>
                            <DropdownItem href='/droneproducts' className='dropdownHeader'> Fixing a Drone</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                        <NavLink href={'/'} className='mr-4 linkHeader'>Create a Drone!</NavLink>
                    </NavItem>
                </Nav>

                {/* //================================ HEADER RIGHT ===================================// */}

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {props.username === '' ?
                            <NavItem>
                                <NavLink href={'/Login'} className='mr-10 linkHeader'>Login / Register</NavLink>
                            </NavItem>
                            :
                            null
                        }
                        {
                            props.username === '' ? null : props.roles === 2 ? (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret className='linkHeader'>
                                        <FaUserSecret /> Welcome, {props.username}
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href='/admindashboard' className='dropdownHeader'><FaRegEdit /> Manage Admin</DropdownItem>
                                        <DropdownItem href='/manageproduct' className='dropdownHeader'><FaPlane /> Manage Product</DropdownItem>
                                        <DropdownItem href='/managesales' className='dropdownHeader'><FaCashRegister /> Manage Sales</DropdownItem>
                                        <DropdownItem href={'/'} onClick={Logoutbtn} className='dropdownHeader'><FaSignOutAlt /> Logout </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            )
                                :
                                props.roles === 1 ? ( //redux.roles
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className='linkHeader'>
                                            <FaUserAstronaut /> Hello, {props.username}
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem href='/cart' className='dropdownHeader'><FaShoppingCart /> My Orders</DropdownItem>
                                            <DropdownItem href='/resetpassword' className='dropdownHeader'><FaUserEdit /> Edit Profile</DropdownItem>
                                            <DropdownItem href={'/'} onClick={Logoutbtn} className='dropdownHeader'><FaSignOutAlt /> Logout </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                ) : null
                        }
                    </Nav>
                </Collapse>

                {/* //================================ SEARCH BAR =====================================// */}

                <div>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
                    <div className="h-100">
                        <div className="d-flex justify-content-center h-100">
                            <div className="searchBar">
                                <input className="searchInput" type="text" name placeholder="Search ..." />
                                <a href="#" className="searchIcon"><i className="fas fa-search" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div >
    );
}

// //================================ MAP STATE TO PROPS ===============================================// //

const MapstateToprops = (state) => {
    return {
        username: state.Auth.username,
        Auth: state.Auth.login,
        roles: state.Auth.idroles,
        // notif: state.Auth.notif,
        // UserId: state.Auth.id,
        // keranjang: state.Auth.keranjang
    }
}

export default connect(MapstateToprops, { LogoutAction })(Header);