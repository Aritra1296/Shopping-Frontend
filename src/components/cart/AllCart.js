import React, { useEffect, useState, useContext } from 'react'
import './Cart.css'
import { Col, Button } from 'react-bootstrap'
import axios from 'axios'
import Cart from './Cart'
import AuthContext from '../../auth/AuthContext'

const AllCart = () => {
  const { loginUserID } = useContext(AuthContext)
  const [carts, setCarts] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchCartItems()
    fetchUserPersonalDetails()
    // eslint-disable-next-line
  }, [loginUserID])

  //Fetching one  user details from user table and cart details from cart table START
  const fetchUserPersonalDetails = async () => {
    try {
      await axios
        .get(
          `http://flybuyapi.aritrarivu.co.in/users/userDetails/${loginUserID}`
        )
        .then((res, req) => {
          setUser(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const fetchCartItems = async () => {
    try {
      await axios
        .get(`http://flybuyapi.aritrarivu.co.in/carts/${loginUserID}`)
        .then((res, req) => {
          setCarts(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  //Fetching one  user details from user table and cart details from cart table END

  // Delete From Cart Method start
  const deleteItems = async (id) => {
    try {
      console.log(id)
      await axios
        .delete(`http://flybuyapi.aritrarivu.co.in/carts/${id}`)
        .then((res, req) => {
          setCarts((dp) => {
            let idx = dp.findIndex((p) => p._id === id)
            return dp.filter((p, i) => i !== idx)
          })
          alert('Product Deleted from Cart successfully')
        })
    } catch (error) {
      console.log(error)
    }
  }
  const deleteHandler = (cart) => (e) => {
    e.preventDefault()
    deleteItems(cart._id)
  }
  // Delete From Cart Method End

  //Place Order mentod start
  const placeOrder = async (user, carts) => {
    try {
      console.log(user)
      console.log(carts)
      await axios
        .post(`http://flybuyapi.aritrarivu.co.in/orders/submitNew`, {
          user,
          carts,
        })
        .then((res, req) => {
          alert('Order Placed successfully')
        })
    } catch (error) {
      console.log(error)
    }
  }

  const PlaceOrderHandler = (e) => {
    e.preventDefault()
    // console.log(this)
    placeOrder(user, carts)
  }
  //Place Order mentod END

  // Render No items message
  if (carts.length === 0) {
    return (
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          No Items in Your Cart
        </h1>
      </div>
    )
  }

  return (
    <div>
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          YOUR CART
        </h1>
      </div>
      {carts.map((cart, index) => {
        return (
          <Col key={cart.productName}>
            <Cart cart={cart} deleteHandler={deleteHandler} />
          </Col>
        )
      })}
      <div
        className='m_30 row align-items-center justify-content-center '
        size='lg'
      >
        <Button variant='success' size='lg' onClick={PlaceOrderHandler}>
          <b>PLACE ORDER</b>
        </Button>
      </div>
    </div>
  )
}

export default AllCart
