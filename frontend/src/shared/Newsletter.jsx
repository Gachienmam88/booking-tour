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
                        {/* Subcribe new to get useful traveling information */}
                        Đăng kí với chúng tôi ngay để biết được những thông tin hữu ích về du lịch
                    </h2>
                    <div className="newsletter__input">
                        <input type="text" placeholder='Điền email của bạn' />
                        <button className='btn newsletter__btn'>
                            Đăng ký ngay
                        </button>
                    </div>
                    <p>Đăng ký ngay với chúng tôi để nhận những thông tin ưu đãi hấp dẫn và cập nhật các thông báo giảm giá đặc biệt. Đừng bỏ lỡ cơ hội trải nghiệm những chuyến du lịch tuyệt vời với mức giá ưu đãi nhất. Hãy là người đầu tiên nhận thông tin về các chương trình khuyến mãi và sự kiện du lịch đặc biệt!</p>
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