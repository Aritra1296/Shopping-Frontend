import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './AboutUs.css'


const AboutUs = () => {
  return (
    <div>
      <Container>
        <Card className='aboout_card'>
          <div className='aboout_card_body'>
            <h1> About Us</h1>
            <p>
              Welcome to this prototype Shopping App FLY BUY. In this
              application you can add a product in your cart and place the
              order. You can update your personal details and see your order history also. Admin can only show the orders placed by all users. Admin
              can also add or remove product from the App. This Application is
              created with MERN stack technology.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default AboutUs
