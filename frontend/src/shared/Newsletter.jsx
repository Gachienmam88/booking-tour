import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
    <section className='newsletter'>
       <Container>
       <Row>
            <Col lg='6'> 
                <div className="newsletter__content">
                    <h2 className=''>
                        Subcribe new to get useful traveling information
                    </h2>
                    <div className="newsletter__input">
                        <input type="text" placeholder='Enter your email' />
                        <button className='btn newsletter__btn'>
                            Subcribe
                        </button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure harum similique excepturi consequatur! Nulla dolorem porro incidunt! Excepturi ab qui ea officiis illo provident sequi eius atque, alias iure.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Newsletter