import React,{ useContext, useState } from 'react'
import { Container,Col,Row,Button,FormGroup,Form } from 'reactstrap'
import '../styles/login.css'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const {dispatch}=useContext(AuthContext)
  const [credentials,setCridentials]=useState({
    email:undefined,
    password:undefined
  })
  const handleChange=(e)=>{
    setCridentials(prev=>{
      return {
        ...prev,[e.target.id]:e.target.value
      }
    })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res=await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(credentials)
      })
      const result=await res.json()
      if(!res.ok){
        throw new Error(result.message)
      }
      
      dispatch({type:'LOGIN_SUCCESS',payload:result.data})
      navigate('/')
    } catch (error) {
      dispatch({type:'LOGIN_FAILED',payload:error})
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
                  <img src={loginImg} alt="" />  
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>
                    Login
                  </h2>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <input type="email" placeholder='Enter your email' required id='email'onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Enter your password' required id='password'onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>
                        Login
                    </Button>
                    <p>Don't have an account <Link to='/register'>Create an account</Link></p>
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

export default Login