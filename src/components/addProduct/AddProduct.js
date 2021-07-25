import React, { useState, useContext } from 'react'
import { Form, Col, Row, Button, Card, Container } from 'react-bootstrap'
import './AddProduct.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import AuthContext from '../../auth/AuthContext'

const AddProduct = () => {
  const { loginUserRole } = useContext(AuthContext)
  const [productDetails, setProductDetails] = useState({
    productName: '',
    productCategory: '',
    productDescription: '',
    productPrice: '',
    productMaxQuantiy: '',
    productStatus: '',
    productImage: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setProductDetails({ ...productDetails, [name]: value })
  }
  const handleImage = (e) => {
    const value = e.target.files
    setProductDetails({ ...productDetails, productImage: [...value] })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const bodyFormData = new FormData()
    productDetails.productImage.forEach((productImageValue) => {
      bodyFormData.append('productImage', productImageValue)
    })
    bodyFormData.append('productName', productDetails.productName)
    bodyFormData.append('productDescription', productDetails.productDescription)
    bodyFormData.append('productPrice', productDetails.productPrice)
    bodyFormData.append('productCategory', productDetails.productCategory)
    bodyFormData.append('productStatus', productDetails.productStatus)
    bodyFormData.append('productMaxQuantiy', productDetails.productMaxQuantiy)
    axios
      .post(
        'http://flybuyapi.aritrarivu.co.in/products/submitNew',
        bodyFormData,
        {
          'Content-Type': 'multipart/form-data',
        }
      )
      .catch((error) => {
        console.log(error)
      })
    setProductDetails({
      productName: '',
      productCategory: '',
      productDescription: '',
      productPrice: '',
      productMaxQuantiy: '',
      productStatus: '',
      productImage: '',
    })
    alert('Product Added successfully')
  }
  if (loginUserRole === 'User') {
    return <Redirect to='/products' />
  }

  return (
    <div>
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          ADD A NEW PRODUCT
        </h1>
      </div>
      <Container>
        <Card className='add_product_card'>
          <Form className='m_20' onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label className='add_product_field'>
                Product Name
              </Form.Label>
              <Form.Control
                type='text'
                name='productName'
                value={productDetails.productName}
                className='add_product_input_field'
                onChange={handleInput}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label className='add_product_field'>
                Product Category
              </Form.Label>
              <Form.Control
                type='text'
                name='productCategory'
                value={productDetails.productCategory}
                onChange={handleInput}
                className='add_product_input_field'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label className='add_product_field'>
                Product Description
              </Form.Label>
              <Form.Control
                type='text'
                name='productDescription'
                value={productDetails.productDescription}
                onChange={handleInput}
                className='add_product_input_field'
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label className='add_product_field'>Price</Form.Label>
                <Form.Control
                  className='add_product_input_field'
                  type='text'
                  name='productPrice'
                  value={productDetails.productPrice}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label className='add_product_field'>Quantity</Form.Label>
                <Form.Control
                  type='number'
                  name='productMaxQuantiy'
                  className='add_product_input_field'
                  value={productDetails.productMaxQuantiy}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Label className='add_product_field'>
                  Availability
                </Form.Label>
                <Form.Control
                  type='text'
                  name='productStatus'
                  className='add_product_input_field'
                  value={productDetails.productStatus}
                  onChange={handleInput}
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label className='add_product_field'>
                Upload Images : &emsp;
              </Form.Label>
              <input
                type='file'
                name='productImage'
                className='add_product_input_field image_uploader'
                onChange={handleImage}
                multiple
              />
            </Form.Group>

            <Button variant='warning' size='lg' type='submit'>
              Add Product
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default AddProduct
