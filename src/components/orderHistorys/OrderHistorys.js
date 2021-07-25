import React, { useEffect, useState, useContext } from 'react'
import OrderHistory from './OrderHistory'
import { Col } from 'react-bootstrap'
import axios from 'axios'
import AuthContext from '../../auth/AuthContext'

const OrderHistorys = () => {
  const { getLoggedIn, loginUserID } = useContext(AuthContext)

  const [orders, setOrders] = useState([])
  console.log(orders)
  useEffect(() => {
    fetchItems()
    getLoggedIn()
    // eslint-disable-next-line
  }, [loginUserID])

  const fetchItems = async () => {
    try {
      await axios
        .get(
          `http://flybuyapi.aritrarivu.co.in/orders/orderHistory/${loginUserID}`
        )
        .then((res, req) => {
          setOrders(res.data)
          console.log(orders)
        })
    } catch (error) {
      console.log(error)
    }
  }
  // Render No items message
  if (orders.length === 0) {
    return (
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          You Dont Have Any Order History
        </h1>
      </div>
    )
  }

  return (
    <div>
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          Order Request History
        </h1>
      </div>
      {orders.map((order, index) => {
        return (
          <Col key={order.userName}>
            <OrderHistory order={order} />
          </Col>
        )
      })}
    </div>
  )
}

export default OrderHistorys
