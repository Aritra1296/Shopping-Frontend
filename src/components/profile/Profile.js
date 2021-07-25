import React, { useEffect, useState, useContext } from 'react'
import { Form, Col, Row, Button, Card, Container } from 'react-bootstrap'
import './Profile.css'
import axios from 'axios'
import AuthContext from '../../auth/AuthContext'

const Profile = () => {
  const { loginUserID } = useContext(AuthContext)
  const [user, setUser] = useState({
    email: '',
    userName: '',
    phone: '',
    gender: '',
    addressLine: '',
    landMark: '',
    city: '',
    zip: '',
    state: '',
  })

  useEffect(() => {
    fetchUserPersonalDetails()
    // eslint-disable-next-line
  }, [loginUserID])

  const fetchUserPersonalDetails = async () => {
    try {
      await axios
        .get(`http://localhost:3005/users/userDetails/${loginUserID}`)
        .then((res, req) => {
          setUser(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleUserInput = async (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.patch(`http://localhost:3005/users/edit/${loginUserID}`, user)
    alert('Contact details Updated successfully')
  }
  
  //if(!userId)  return null

  return (
    <div>
      <div className='m_20'>
        <h1 className='col-12 row align-items-center justify-content-center'>
          {user && user.userName}'s Profile
        </h1>
      </div>
      <Container>
        <Card className='profile_card'>
          <Form className='m_20' onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label className='profile_field'>Email</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={user && user.email}
                  className='profile_input_field'
                  onChange={handleUserInput}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label className='profile_field'>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='userName'
                  value={user && user.userName}
                  className='profile_input_field'
                  onChange={handleUserInput}
                />
              </Form.Group>
            </Row>
            <Form.Group controlId='formGridAddress1'>
              <Form.Label className='profile_field'>Address </Form.Label>
              <Form.Control
                name='addressLine'
                value={user && user.addressLine}
                className='profile_input_field'
                onChange={handleUserInput}
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId='formGridAddress2'>
                <Form.Label className='profile_field'>Land Mark</Form.Label>
                <Form.Control
                  name='landMark'
                  value={user && user.landMark}
                  className='profile_input_field'
                  onChange={handleUserInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridAddress2'>
                <Form.Label className='profile_field'>Phone No.</Form.Label>
                <Form.Control
                  type='phone'
                  name='phone'
                  value={user && user.phone}
                  className='profile_input_field'
                  onChange={handleUserInput}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label className='profile_field'>City</Form.Label>
                <Form.Control
                  className='profile_input_field'
                  name='city'
                  value={user && user.city}
                  onChange={handleUserInput}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridCity'>
                <Form.Label className='profile_field'>State</Form.Label>
                <Form.Control
                  name='state'
                  value={user && user.state}
                  className='profile_input_field'
                  onChange={handleUserInput}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formGridZip'>
                <Form.Label className='profile_field'>Zip</Form.Label>
                <Form.Control
                  name='zip'
                  value={user && user.zip}
                  className='profile_input_field'
                  onChange={handleUserInput}
                />
              </Form.Group>
            </Row>
            <Form.Group controlId='formGridAddress2'>
              <Form.Label className='profile_field'>Gender </Form.Label>
              <Form.Control
                type='text'
                name='gender'
                value={user && user.gender}
                className='profile_input_field'
                onChange={handleUserInput}
              />
            </Form.Group>
            <Button variant='info' type='submit' size='lg'>
              Edit Profile
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default Profile
