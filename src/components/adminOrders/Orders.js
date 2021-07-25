import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../auth/AuthContext'
import AdminOrder from './AdminOrder'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Orders = () => {
  const { getLoggedIn, loginUserRole } = useContext(AuthContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchItems()
    getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchItems = async () => {
    try {
      await axios
        .get(`http://flybuyapi.aritrarivu.co.in/orders`)
        .then((res, req) => {
          setOrders(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  if (loginUserRole === 'User') {
    return <Redirect to='/products' />
  }
  return (
    <div>
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          ORDER REQUEST FROM USERS
        </h1>
      </div>
      {orders.map((order, index) => {
        return (
          <Col key={order.userName}>
            <AdminOrder order={order} />
          </Col>
        )
      })}
    </div>
  )
}

export default Orders
