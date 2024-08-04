import React, {  useEffect, useRef } from "react";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout , resetLogoutStatus } from "../../redux/slices/user";
import toast from "react-hot-toast";
const Header = () => {
  const nav__links = [
    {
      path: "home",
      display: "Trang chủ",
    },
    {
      path: "/about",
      display: "Giới thiệu",
    },
    {
      path: "tours",
      display: "Tours",
    },
  ];
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const {user,logoutStatus,logoutError}=useSelector(state=>state.user)
  const menuRef=useRef(null)
  const dispatch=useDispatch()

  const logOut = () => {
    dispatch(logout())
  };
  const toggleMenu=()=>{
    menuRef.current.classList.toggle('show__menu')
  }
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  useEffect(()=>{
    if(logoutStatus==='succeed'){
      navigate('/login')
      toast.success('Đăng xuất thành công !')
      dispatch(resetLogoutStatus())
    } 
    if(logoutStatus==='failed'){
      toast.error(logoutError)
      dispatch(resetLogoutStatus())
    }
  },[logoutStatus, logoutError, navigate,dispatch,user])
  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between ">
              {/* logo */}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              {/* end logo */}
              {/* menu start */}
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => {
                    return (
                      <>
                        <li className="nav__item" key={index}>
                          <NavLink
                            to={item.path}
                            className={(navClass) =>
                              navClass.isActive ? "active__link" : ""
                            }
                          >
                            {item.display}
                          </NavLink>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              {/* menu end  */}
              <div className="nav__right d-flex align-items-center gap-4 ">
                <div className="nav__btns d-flex align-items-center gap-4">
                  {user ? (
                    <> 
                      {user.photo && <><div className="photo__img">
                        <img src={user.photo} alt="" className="user__img" />
                      </div></>}
                      <h5 className="mb-0">{user.username}</h5>
                      <Button className="btn btn-dark " onClick={logOut}>
                        {logoutStatus==='loading' ? 'Đăng xuất ... ':'Đăng xuất'}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link className="" to="/login">
                          Đăng nhập
                        </Link>
                      </Button>
                      <Button className="btn primary__btn">
                        <Link className="" to="/register">
                          Đăng ký
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
                <span className="mobile__menu" onClick={toggleMenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
