import React, { useEffect, useState, useContext } from 'react'
import Product from '../product/Product'
import { Row, Col, CardGroup } from 'react-bootstrap'
import axios from 'axios'
import AuthContext from '../../auth/AuthContext'

const Products = () => {
  const { loginUserID, getLoggedIn } = useContext(AuthContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchItems()
    getLoggedIn()
    // eslint-disable-next-line
  }, [loginUserID])

  const fetchItems = async () => {
    try {
      await axios.get(`http://localhost:3005/products`).then((res, req) => {
        setProducts(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const addToCart = async (product, loginUserID) => {
    try {
      await axios
        .post(`http://localhost:3005/carts/submitNew`, {
          loginUserID,
          productName: product.productName,
          productDescription: product.productDescription,
          productImage: product.productImage,
          productPrice: product.productPrice,
        })
        .then((res, req) => {
          alert('Product added to Cart successfully')
        })
    } catch (error) {
      console.log(error)
    }
  }
  const addToCartHandler = (product) => (e) => {
    e.preventDefault()
    addToCart(product, loginUserID)
  }

  return (
    <div className='m_20'>
      <CardGroup>
        <Row xs={1} md={3} className='g-3'>
          {products.map((product, index) => {
            return (
              <Col key={product.productName}>
                <Product
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </Col>
            )
          })}
        </Row>
      </CardGroup>
    </div>
  )
}

export default Products
