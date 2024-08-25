import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { register, resetRegisterStatus } from "../redux/slices/user";
import "../styles/login.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import uploadCloudinary from "../utils/uploadCloudinary";
import { HashLoader } from "react-spinners";

const Register = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.registerStatus);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const error = useSelector((state) => state.user.registerError);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
    photo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleFileInputChange = async (e) => {

    const file = e.target.files[0];
    if(file){
      const data = await uploadCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setCredentials({ ...credentials, photo: data.url });
    }
    //Phan 3 dung cloudnaru gi do dung de upload file
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(credentials));
  };
  const path_name=useLocation()
  useEffect(() => {
    if (status === "succeed") {
      dispatch(resetRegisterStatus());
      navigate("/login");
      toast.success(
        "Đăng ký thành công ! Vui lòng đăng nhập để sử dụng ứng dụng"
      );
    }
    if (status === "failed") {
      toast.error(error);
      dispatch(resetRegisterStatus());
    }
  }, [status, dispatch, navigate,error]);
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
                  <img src={registerImg} alt="" />
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Đăng ký</h2>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Vui lòng nhập email"
                        required
                        id="email"
                        onChange={handleChange}
                        value={credentials.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Vui lòng nhập tên hiển thị"
                        required
                        id="username"
                        onChange={handleChange}
                        value={credentials.username}
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Vui lòng nhập mật khẩu"
                        required
                        id="password"
                        onChange={handleChange}
                        value={credentials.password}
                      />
                    </FormGroup>
                    <FormGroup>
                    <label htmlFor="" className="label__upload">
                          Chọn ảnh đại diện
                        </label>
                      <div className="upload-container">
                        {selectedFile && (
                          <figure className="preview-img">
                            <img
                              src={previewURL}
                              alt=""
                              className="img-preview"
                            />
                          </figure>
                        )}
                        <div className="upload-input-container">
                          <input
                            type="file"
                            name="photo"
                            id="customFile"
                            className="file-input"
                            onChange={handleFileInputChange}
                            accept=".jpg,.png"
                          />
                          <label htmlFor="customFile" className="upload-label">
                            Chọn ảnh
                          </label>
                        </div>
                      </div>
                    </FormGroup>
                    <Button
                      className="btn secondary__btn auth__btn"
                      type="submit"
                    >
                      {status === "loading" ?  <HashLoader size={25} color="#fff" /> : "Đăng ký"}
                    </Button>
                    <p>
                      Bạn đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
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

export default Register;
