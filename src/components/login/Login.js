import React, { useState, useContext } from 'react'
import { Card, Button, Form, Container } from 'react-bootstrap'
import classes from './Login.module.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../auth/AuthContext'

const Login = () => {
  const history = useHistory()
  const { setloginUserID } = useContext(AuthContext)

  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setuserLogin({ ...userLogin, [name]: value })
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      axios
        .post(`http://flybuyapi.aritrarivu.co.in/users/login`, userLogin)
        .then((res, req) => {
          console.log('signed in')
          setloginUserID(res.data._id)
          history.push(`/products`)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className={classes.wrapper}>
      <h1 className='text-center mb-5'>Welcome to FLY BUY</h1>
      <Card className='mb-2'>
        <Card.Body>
          <Form onSubmit={login}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='fw-bold'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={userLogin.email}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                name='password'
                value={userLogin.password}
                onChange={handleInput}
              />
            </Form.Group>
            <Button className='w-100 mb-2' variant='primary' type='submit'>
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='text-center'>
        <h5>
          Don't have an account? <a href='/signup'>Sign up</a>
        </h5>
      </div>
    </Container>
  )
}

export default Login
