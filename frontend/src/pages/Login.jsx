import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, FormGroup, Form } from "reactstrap";
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetLoginStatus } from "../redux/slices/user"; // cập nhật đường dẫn chính xác
import toast from "react-hot-toast";
import { Audio } from "react-loader-spinner";
import { HashLoader } from "react-spinners";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginStatus, user, loginError } = useSelector((state) => state.user); // Lấy user từ state
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  const path_name=useLocation()
  useEffect(() => {
    if (loginStatus === "succeed" && user) {
      navigate("/home"); // Chuyển hướng đến trang chính sau khi đăng nhập thành công\
      toast.success("Đăng nhập thành công !");
      dispatch(resetLoginStatus());
    }
    if (loginStatus === "failed") {
      toast.error(loginError);
      dispatch(resetLoginStatus());
    }
  }, [dispatch, navigate, loginStatus, user, loginError]);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[path_name])
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={loginImg} alt="" />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Đăng nhập</h2>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Nhập email của bạn"
                        required
                        id="email"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button
                      className="btn secondary__btn auth__btn"
                      type="submit"
                    >
                      {loginStatus === "loading" ? (
                        <HashLoader size={25} color="#fff" />
                      ) : (
                        "Đăng nhập"
                      )}
                    </Button>
                    <p>
                      Bạn chưa có tài khoản ?{" "}
                      <Link to="/register">Tạo ngay</Link>
                    </p>
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
