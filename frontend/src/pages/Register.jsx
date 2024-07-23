import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { register, resetStatus } from '../redux/slices/user';
import '../styles/login.css';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.user.status);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    username: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(credentials));
  };

  useEffect(() => {
    if (status === 'succeed') {
      dispatch(resetStatus());
      navigate('/login');
      alert('Successfully registered!');
    }
  }, [status, dispatch, navigate]);

  useEffect(() => {
    if (status === 'failed') {
      alert('Something went wrong!');
      dispatch(resetStatus());
    }
  }, [status, dispatch]);

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
                  <h2>Register</h2>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder='Enter your email'
                        required
                        id='email'
                        onChange={handleChange}
                        value={credentials.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder='Enter your username'
                        required
                        id='username'
                        onChange={handleChange}
                        value={credentials.username}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder='Enter your password'
                        required
                        id='password'
                        onChange={handleChange}
                        value={credentials.password}
                      />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>
                      {status === 'loading' ? 'Register...' : 'Register'}
                    </Button>
                    <p>Already have an account? <Link to='/login'>Login here</Link></p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;