import React from 'react'
import './Cart.css'
import { Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap'

const Cart = ({ cart, deleteHandler }) => {
  return (
    <div>
      {/* Cart single Cart Start */}
      <Card className='cart_card m_30'>
        <div>
          <Row>
            <Col md={4}>
              <Carousel fade>
                {cart.productImage.map((images, index) => {
                  return (
                    <Carousel.Item key={images.image}>
                      <Image
                        src={'http://localhost:3005/' + images}
                        rounded
                        className='cart_image'
                      />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Col>
            <Col>
              <Row className='row align-items-center m_20 cart_title'>
                {cart.productName}
              </Row>
              <Row className='row align-items-center m_20 cart_description'>
                {cart.productDescription}
              </Row>
              <Row className='row align-items-center m_20 cart_price'>
                Price : {cart.productPrice} Rs
              </Row>
              <Row className='row align-items-center  m_20'>
                <Col>
                  <Button variant='danger' onClick={deleteHandler(cart)}>
                    Remove Item
                  </Button>
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

export default Cart
