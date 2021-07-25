import React, { useEffect, useState, useContext } from 'react'
import './DashBoard.css'
import { Link } from 'react-router-dom'
import DashBoardElement from './DashBoardElement'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import AuthContext from '../../auth/AuthContext'
import { Redirect } from 'react-router-dom'

const DashBoard = () => {
  const { getLoggedIn, loginUserRole } = useContext(AuthContext)
  const [dashBoardProducts, setDashBoardProducts] = useState([])

  useEffect(() => {
    fetchDashBoardItems()
    getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchDashBoardItems = async () => {
    try {
      await axios
        .get(`http://flybuyapi.aritrarivu.co.in/products`)
        .then((res, req) => {
          setDashBoardProducts(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItems = async (id) => {
    try {
      console.log(id)
      await axios
        .delete(`http://flybuyapi.aritrarivu.co.in/products/${id}`)
        .then((res, req) => {
          setDashBoardProducts((dp) => {
            let idx = dp.findIndex((p) => p._id === id)
            return dp.filter((p, i) => i !== idx)
          })
          alert('Product  Deleted successfully')
        })
    } catch (error) {
      console.log(error)
    }
  }
  const deleteHandler = (dashBoardProduct) => (e) => {
    e.preventDefault()
    deleteItems(dashBoardProduct._id)
  }

  if (loginUserRole === 'User') {
    return <Redirect to='/products' />
  }

  return (
    <div className=''>
      <Row className='m_20'>
        <Col>
          <h1 className='col-12 row align-items-center justify-content-center'>
            Admin DashBoard
          </h1>
        </Col>
        <Col>
          <Link to='/addProduct'>
            <Button variant='success' size='lg'>
              Add Product
            </Button>
          </Link>
        </Col>
      </Row>
      {/* Dashboard single Product Mapping Start */}
      {dashBoardProducts.map((dashBoardProduct, index) => {
        return (
          <Col key={dashBoardProduct.productName}>
            <DashBoardElement
              dashBoardProduct={dashBoardProduct}
              deleteHandler={deleteHandler}
            />
          </Col>
        )
      })}

      {/* DashBoard single Product  Mapping end */}
    </div>
  )
}

export default DashBoard
