import React from 'react'
import './Product.css'
import { Card, Button, Carousel, Image } from 'react-bootstrap'

const Product = ({ product, addToCartHandler }) => {
  return (
    <div>
      <Card className='procuct_card'>
        <Carousel fade>
          {product.productImage.map((images, index) => {
            return (
              <Carousel.Item key={images.image}>
                <Image
                  src={'http://flybuyapi.aritrarivu.co.in/' + images}
                  rounded
                  className='cart_image'
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
        <Card.Body>
          <Card.Title className='procuct_title'>
            {product.productName}
          </Card.Title>
          <Card.Text className='procuct_description'>
            {product.productDescription}
          </Card.Text>
          <Card.Text className='procuct_price'>
            <b>Price : </b>
            {product.productPrice} &nbsp;Rs.
          </Card.Text>
          <Card.Text className='procuct_status'>
            <b>Status : </b>
            {product.productStatus}
          </Card.Text>
          <Button variant='dark' onClick={addToCartHandler(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
