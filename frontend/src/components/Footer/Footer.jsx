import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const quick__links = [
    {
      path: "/home",
      display: "Trang chủ",
    },
    {
      path: "/about",
      display: "Giới thiệu",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const quick__links2 = [
    {
      path: "/gallery",
      display: "Triển lãm",
    },
    {
      path: "/login",
      display: "Đăng nhập",
    },
    {
      path: "/register",
      display: "Đăng ký",
    },
  ];
  const year=new Date().getFullYear()
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <div className="logo">
                <img src={logo} alt="" />
                <p>Theo dõi chúng tôi trên mạng xã hội để nhận ưu đãi!</p>
                <div className="social__links d-flex align-items-center gap-4">
                  <span>
                    <Link to='#'>
                      <i class="ri-youtube-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                     <i class="ri-github-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                      <i class="ri-facebook-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                      <i class="ri-instagram-line"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <h5 className="footer__link-title">Khám phá</h5>
              <ListGroup className="footer__quick-links">
                {
                  quick__links.map((item,index)=>{
                    return (
                      <>
                        <ListGroupItem key={index} className="ps-0 border-0">
                          <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                      </>
                    )
                  })
                }
              </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className="footer__link-title">Truy cập nhanh</h5>
              <ListGroup className="footer__quick-links">
                {
                  quick__links2.map((item,index)=>{
                    return (
                      <>
                        <ListGroupItem key={index} className="ps-0 border-0">
                          <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                      </>
                    )
                  })
                }
              </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className="footer__link-title">Liên hệ</h5>
              <ListGroup className="footer__quick-links">
                        <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                          <h6 className="mb-0 d-flex align-items-center gap-2">
                            <span>
                              <i class="ri-map-pin-line"></i> 
                            </span>
                            Địa chỉ:
                          </h6>
                          <p className="mb-0">
                            Hà Nội , Việt Nam
                          </p>
                        </ListGroupItem>
                        <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                          <h6 className="mb-0 d-flex align-items-center gap-2">
                            <span >
                             <i class="ri-mail-line"></i>
                            </span>  Email: 
                          </h6>
                          <p className="mb-0">
                            chipchip7a2@gmail.com
                          </p>
                        </ListGroupItem>
                        <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                          <h6 className="mb-0 d-flex align-items-center gap-2">
                            <span>
                            <i class="ri-phone-line"></i> 
                            </span>
                            Liên hệ
                          </h6>
                          <p className="mb-0">
                            +84 969335203
                          </p>
                        </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg='12' className="text-center">
                <p className="copyright">
                  Copyright {year} , design and develop by GaChienMam88 . All rights reserved 
                </p> 
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
