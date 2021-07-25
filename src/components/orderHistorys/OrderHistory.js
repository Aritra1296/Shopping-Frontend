import React from 'react'
import {  Col } from 'react-bootstrap'
import OrderHistorysComponent from './OrderHistorysComponent'

const OrderHistory = ({ order }) => {
  return (
    <div>
      {order.productDetails.map((productDetail, index) => {
        return (
          <Col key={productDetail.productName}>
            <OrderHistorysComponent
              order={order}
              productDetail={productDetail}
            />
          </Col>
        )
      })}
    </div>
  )
}

export default OrderHistory
