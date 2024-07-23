import React, { useContext, useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import { useSelector } from "react-redux";
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
    console.log(booking)
    try {
      if(!user || user===undefined || user===null){
        navigate('/login')
        return alert('Please sign in')
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
      alert(error)
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
  const serviceFee=10
  const totalAmount=Number(price)*Number(booking.guestSize)+Number(serviceFee)

  return (
    <>
      <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>
            {price} $ <span>/per person</span>
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
          <h5>Information</h5>
          <Form className="booking__info-form" onSubmit={handleSubmit}>
            <FormGroup>
              <input type="text" placeholder="Full name"id="fullName" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <input type="number" placeholder="Enter your phone number"id="phone" required onChange={handleChange} />
            </FormGroup>
            <FormGroup className="d-flex align-items-center gap-3">
              <input type="date" placeholder=""id="bookAt" required onChange={handleChange} />
              <input type="number" min={0} placeholder="Enter you number guest"id="guestSize" required onChange={handleChange} />
            </FormGroup>
          </Form>
        </div>
        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className="border-0 px-0 ">
              <h5 className="d-flex align-items-center gap-1">$ {price} <i class="ri-close-line"></i> / {booking.guestSize} person </h5>
              <span>$ {price}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              <h5>Service charge</h5>
              <span>$ {serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0 total">
              <h5>Total</h5>
              <span>$ {totalAmount}</span>
            </ListGroupItem>
          </ListGroup>
          <Button className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>
            Book Now
          </Button>
        </div>
        {/* booking form end  */}
      </div>
    </>
  );
};

export default Booking;
