import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/tour-detail.css'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import caculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'
const TourDetail = () => {
  const {id}=useParams()
  const reviewMsgRef=useRef('')
  const [tourRating,setTourRating]=useState(null)
  const navigate=useNavigate()
  //Day la data tinh , Luc sao ta se call api
  const {data:tour,loading,error}=useFetch(`${BASE_URL}/tours/${id}`)
  // destruction properties from our object
  const {photo,title,desc,price,reviews,city,distance,maxGroupSize,address}=tour
  const {totalRating,avgRating}=caculateAvgRating(reviews)
  const {user}=useContext(AuthContext)
  //format date
  const options={day:'numeric',month:'long',year:'numeric'}


  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])
  //submit request to the server
  const submitHandler=async (e)=>{
    e.preventDefault()
    const reviewText=reviewMsgRef.current.value
    //call api
    
    try {
      if(!user || user===undefined || user===null){
        navigate('/login')
        return alert('Please sign in !')
      }
      const reviewObj={
        username:user?.username,
        reviewText,
        rating:tourRating
      }
      console.log(reviewObj)
      const res=await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })
      const result = await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      alert(result.message)
    } catch (error) {
        alert(error)
    }
  }
  return (
    <>
    <section>
      <Container>
        {
          loading && <h4 className='text-center pt-5'>
            Loading..........
          </h4>
        }
        {
            error && <h4 className='text-center pt-5'>
            {error}
          </h4>
        }
        {!loading && !error && <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5 ">
                    <span className='tour__rating d-flex align-items-center gap-1 '>
                        <i class="ri-star-s-fill" style={{color:'var(--secondary-color)'}}></i> {avgRating===0 ? null :avgRating } {totalRating===0?'Not rated' : <span>({reviews?.length})</span>} 
                    </span>
                    <span>
                      <i class="ri-map-pin-fill"></i> {address}
                    </span>
                </div>
                <div className='tour__extra-detail'>
                  <span>
                   <i class="ri-map-pin-2-line"></i> {city}
                  </span>
                  <span>
                   <i class="ri-exchange-dollar-line"></i> {price} $ per person
                  </span>
                  <span>
                   <i class="ri-map-pin-time-line"></i> {distance} km
                  </span>
                  <span>
                   <i class="ri-group-line"></i> {maxGroupSize} people
                  </span>
                </div>
                <h5 className=''>
                  Decription
                </h5>
                <p>{desc}</p>
              </div>
              {/* Tour review section start */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length}) </h4>
                <Form onSubmit={submitHandler}>
                  <div className="rating-group d-flex align-items-center gap-3 mb-4">
                      <span onClick={()=>setTourRating(1)}>1 <i className={tourRating===1 ?'star__active ri-star-s-fill':'ri-star-s-fill'} class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(2)}>2 <i className={tourRating===2 ?'star__active ri-star-s-fill':'ri-star-s-fill'} class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(3)}>3 <i className={tourRating===3 ?'star__active ri-star-s-fill':'ri-star-s-fill'} class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(4)}>4 <i className={tourRating===4 ?'star__active ri-star-s-fill':'ri-star-s-fill'} class="ri-star-s-fill"></i></span>
                      <span onClick={()=>setTourRating(5)}>5 <i className={tourRating===5 ?'star__active ri-star-s-fill':'ri-star-s-fill'} class="ri-star-s-fill"></i></span>
                  </div>
                  <div className='review__input'>
                    <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                    <button className='btn primary__btn text-white' type='submit'>
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className='user__reviews'> 
                  {
                    reviews?.map((item,index)=>{
                      return (
                        <>
                          <div className="review__item">
                            <img src={avatar} alt="" />
                            <div className="w-100">
                              <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                  <h5>{item.username}</h5>
                                  <p>{new Date('01-18-2023').toLocaleDateString('en-US',options)}</p>
                                </div>
                                <span className='d-flex align-items-center '>
                                  {item.rating}<i class="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>
                                {item.reviewText}
                              </h6>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </ListGroup>
              </div> 
              {/* Tour review section end  */}
            </div>
          </Col>
          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} title={title}/>
          </Col>
        </Row>}
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default TourDetail