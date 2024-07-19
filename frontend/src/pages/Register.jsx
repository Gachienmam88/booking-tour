import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import '../styles/login.css'
const Register = () => {
  const [credentials,setCridentials]=useState({
    email:undefined,
    password:undefined,
    username:undefined
  })
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setCridentials(prev=>{
      return {
        ...prev,[e.target.id]:e.target.value
      }
    })
  }
  const {dispatch}=useContext(AuthContext)
  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log(credentials)
    try {
      const res=await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })
      const result=await res.json()
      if(!res.ok){
        throw new Error(result.message)
      }
      alert('Successfully register')
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    } catch (error) {
      alert( `${error}`)
    }
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={registerImg} alt="" />  
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>
                    Register
                  </h2>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <input type="email" placeholder='Enter your email' required id='email'onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="text" placeholder='Enter your username' required id='username'onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Enter your password' required id='password'onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>
                        Register
                    </Button>
                    <p>Already have an account <Link to='/register'>Login here</Link></p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Register