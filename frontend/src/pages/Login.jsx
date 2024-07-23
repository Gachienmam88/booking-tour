import React, { useState, } from 'react';
import { Container, Col, Row, Button, FormGroup, Form } from 'reactstrap';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login ,resetStatus} from '../redux/slices/user'; // cập nhật đường dẫn chính xác
 
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, user } = useSelector(state => state.user); // Lấy user từ state
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev, [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

 
    if (status === 'succeed' && user) {
      navigate('/home'); // Chuyển hướng đến trang chính sau khi đăng nhập thành công
      dispatch(resetStatus())
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
                  <h2>Login</h2>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <input type="email" placeholder='Enter your email' required id='email' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Enter your password' required id='password' onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>
                      {status === 'loading' ? 'Login....' : 'Login'}
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
  );
};

export default Login;