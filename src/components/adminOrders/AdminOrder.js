import React from 'react'
import OrderComponent from './OrderComponent'
import {Col} from 'react-bootstrap'

const AdminOrder = ({ order }) => {
  return (
    <div>
      {order.productDetails.map((productDetail, index) => {
        return (
          <Col key={productDetail.productName}>
            <OrderComponent order={order}  productDetail={productDetail} />
          </Col>
        )
      })}
    </div>
  )
}

export default AdminOrder
