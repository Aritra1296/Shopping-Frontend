import React, { useContext } from 'react'
import axios from 'axios'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Header.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Products from '../products/Products'
import Profile from '../profile/Profile'
import AllCart from '../cart/AllCart'
import DashBoard from '../dashBoard/DashBoard'
import AddProduct from '../addProduct/AddProduct'
import AboutUs from '../aboutUs/AboutUs'
import Orders from '../adminOrders/Orders'
import OrderHistorys from '../orderHistorys/OrderHistorys'
import AuthContext from '../../auth/AuthContext'

const Header = () => {
  const history = useHistory()

  const { loginUserRole, loggedIn, getLoggedIn } = useContext(AuthContext)

  async function logOut() {
    try {
      await axios.get(`http://localhost:3005/users/logout`)
      await getLoggedIn()
      alert('You Have Successfully Logged Off')
      console.log('logged out')
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='header_bg'>
      <Router>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          sticky='top'
        >
          <Container className='header_text'>
            {loggedIn === true && (
              <Navbar.Brand href='/products' className='header_app_name_text'>
                FLY BUY
              </Navbar.Brand>
            )}
            {loggedIn === false && (
              <Navbar.Brand className='header_app_name_text'>
                FLY BUY
              </Navbar.Brand>
            )}
            {loggedIn === true && (
              <>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='header_right  justify-content-end'>
                    {loginUserRole === 'Admin' && (
                      <>
                        <Nav.Link href='/adminOrders'>ADMIN ORDERS</Nav.Link>
                        <Nav.Link href='/dashBoard'>ADMIN DASHBOARD</Nav.Link>
                      </>
                    )}
                    <Nav.Link href='/cart'>CART</Nav.Link>
                    <Nav.Link href='/products'>PRODUCTS</Nav.Link>
                    <NavDropdown title='PROFILE' id='collasible-nav-dropdown'>
                      <NavDropdown.Item href='/profile'>
                        Your Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href='/orderHistorys'>
                        Your Orders
                      </NavDropdown.Item>
                      <NavDropdown.Item href='/aboutUs'>
                        About Us
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='/' onClick={logOut}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </>
            )}
          </Container>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/signUp' component={Signup}></Route>
          <Route path='/adminOrders' component={Orders}></Route>
          <Route path='/cart' component={AllCart}></Route>
          <Route path='/dashBoard' component={DashBoard}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/aboutUs' component={AboutUs}></Route>
          <Route path='/addProduct' component={AddProduct}></Route>
          <Route path='/orderHistorys' component={OrderHistorys}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Header
