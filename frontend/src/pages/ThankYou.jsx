import React, { useEffect } from 'react'
import { Container,Row,Col,Button } from 'reactstrap'
import '../styles/thank-you.css'
import { Link, useLocation } from 'react-router-dom'
const ThankYou = () => {
    const path_name=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
      },[path_name])
  return (
   <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className='mb-3 fw-semibold '>Cảm ơn quý khách</h1>
                        <h3 className='mb-4'>Tour của bạn đã được đặt.</h3>
                        <Button className='btn primary__btn w-25'>
                            <Link to='/home'>Trở về trang chủ</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
   </section>
  )
}

export default ThankYou