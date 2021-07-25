import React from 'react'
import './DashBoard.css'
import { Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap'

const DashBoardElement = ({ dashBoardProduct, deleteHandler }) => {
  return (
    <div className=''>
      <Card className='dashBoard_card m_30'>
        <div>
          <Row>
            <Col md={4}>
              <Carousel fade>
                {dashBoardProduct.productImage.map((images, index) => {
                  return (
                    <Carousel.Item>
                      <Image
                        src={'http://flybuyapi.aritrarivu.co.in/' + images}
                        rounded
                        className='cart_image'
                      />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </Col>
            <Col>
              <Row className='row align-items-center m_20 dashBoard_title'>
                {dashBoardProduct.productName}
              </Row>
              <Row className='row align-items-center m_20 cart_description'>
                {dashBoardProduct.productDescription}
              </Row>
              <Row className='row align-items-center m_20 dashBoard_price'>
                Price : {dashBoardProduct.productPrice} Rs
              </Row>
              <Row className='row align-items-center m_20 dashBoard_status'>
                Status : {dashBoardProduct.productStatus}
              </Row>
              <Row className='row align-items-center  m_20'>
                <Col>
                  Available Quantity : {dashBoardProduct.productMaxQuantiy}
                </Col>
                <Col>
                  <Button
                    variant='danger'
                    onClick={deleteHandler(dashBoardProduct)}
                    size='lg'
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  )
}

export default DashBoardElement
