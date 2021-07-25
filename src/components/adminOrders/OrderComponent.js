import React from 'react'
import { Row, Col, Card, Image, Carousel } from 'react-bootstrap'
import './Orders.css'
import moment from 'moment'

const OrderComponent = ({ productDetail, order }) => {
  return (
    <div>
      {/* single order */}

      <Card className='cart_card m_30'>
        <div>
          <Row>
            <Col md={4}>
              <Carousel fade>
                {productDetail.productImage.map((images, index) => {
                  return (
                    <Carousel.Item key={images.image}>
                      <Image
                        src={'http://localhost:3005/' + images}
                        rounded
                        className='order_image'
                      />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Col>
            <Col>
              <Row className='row align-items-center m_20 order_name_title'>
                <Col>
                  <div className='d-flex'>
                    <div className=''> Poduct Name : </div>&nbsp;
                    <div className=''>{productDetail.productName}</div>
                  </div>
                </Col>
              </Row>
              <Row className='row align-items-center m_20 '>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Price : </div>&nbsp;
                    <div className='order_description'>
                      {productDetail.productPrice} Rs
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Order Date : </div>&nbsp;
                    <div className='order_description'>
                      {moment(order.Orderdate).format('LLL')}
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className='row align-items-center m_20 '>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Name : </div>&nbsp;
                    <div className='order_description'> {order.userName}</div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Phone : </div>&nbsp;
                    <div className='order_description'> {order.phone}</div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Email Id : </div>&nbsp;
                    <div className='order_description'> {order.email}</div>
                  </div>
                </Col>
              </Row>
              <Row className='row align-items-center m_20 '>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'>Address : </div>&nbsp;
                    <div className='order_description'>{order.addressLine}</div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Land Mark : </div>&nbsp;
                    <div className='order_description'> {order.landMark}</div>
                  </div>
                </Col>
              </Row>
              <Row className='row align-items-center m_20 '>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> City: </div>&nbsp;
                    <div className='order_description'> {order.city}</div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> Zip: </div>&nbsp;
                    <div className='order_description'> {order.zip}</div>
                  </div>
                </Col>
                <Col>
                  <div className='d-flex'>
                    <div className='order_title'> State: </div>&nbsp;
                    <div className='order_description'> {order.state}</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>

      {/* Cart single End Start */}
    </div>
  )
}

export default OrderComponent
