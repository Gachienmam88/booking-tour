import React, {  useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import formatVnd from "../../utils/formatVnd"
const Booking = ({ tour, avgRating,title }) => {
  const user=useSelector(state=>state.user.user)
  const { price, reviews } = tour;
  const handleChange=(e)=>{
    setBooking(prev=>{
      return {
        ...prev,[e.target.id]:e.target.value
      }
    })
  }
  const navigate=useNavigate()
  //send data to the server
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
      if(!user || user===undefined || user===null){
        navigate('/login')
        return toast.error('Vui lòng đăng nhập trước khi thanh toán ')
      }
      const res=await fetch(`${BASE_URL}/booking`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(booking)
      })
      const result=await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      navigate('/thank-you')
    } catch (error) {
      toast.error(error)
    }
    
  }
  const [booking,setBooking]=useState({
    userId:user&& user._id,
    userEmail:user?.email,
    tourName:title,
    fullName:"",
    phone:'',
    guestSize:1,
    bookAt:''
  })
  const serviceFee=1500000
  const totalAmount=Number(price)*Number(booking.guestSize)+Number(serviceFee)

  return (
    <>
      <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>
            {formatVnd(price)} vnđ  <span>/ Người</span>
          </h3>
          <span className="tour__rating d-flex align-items-center gap-1 ">
            <i
              class="ri-star-s-fill"
              style={{ color: "var(--secondary-color)" }}
            ></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </div>
        {/* booking form start */}
        <div className="booking__form">
          <h5>Thông tin</h5>
          <Form className="booking__info-form" onSubmit={handleSubmit}>
            <FormGroup>
              <input type="text" placeholder="Nhập họ tên đầy đủ"id="fullName" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <input type="number" placeholder="Nhập số điện thoại"id="phone" required onChange={handleChange} />
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
              <input type="date" placeholder="Đặt ngày "id="bookAt" required onChange={handleChange} />
              <input type="number" min={0} placeholder="Nhập số lượng người "id="guestSize" required onChange={handleChange} />
            </FormGroup>
          </Form>
        </div>
        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0 ">
              <h5 className="d-flex align-items-center gap-1">  {formatVnd(price)} vnđ  <i class="ri-close-line"></i> / {booking.guestSize} Người </h5>
              <span> {formatVnd(price)} vnđ </span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Phí dịch vụ</h5>
              <span> {formatVnd(serviceFee)} vnđ </span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Tổng cộng</h5>
              <span> {formatVnd(totalAmount)} vnđ </span>
            </ListGroupItem>
          </ListGroup>
          <Button className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>
            Đặt ngay
          </Button>
        </div>
        {/* booking form end  */}
      </div>
    </>
  );
};

export default Booking;
