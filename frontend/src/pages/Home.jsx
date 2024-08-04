import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import MasonrylImageGallery from '../components/Image-gallery/MasonrylImageGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    // hero section start 
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
              <div className='hero__content'>
                  <div className='hero__subtitle d-flex align-items-center '>
                      <Subtitle subtitle={'Tìm hiểu trước chuyến đi của bạn !'} />
                      <img src={worldImg} alt="" />
                  </div>
                  <h1 className=''>
                     Khám phá thế giới, trải nghiệm khác biệt
                    <span className='highlight'>
                      Vòng quanh thế giới 
                    </span>
                  </h1>
                  <p>Chào mừng bạn đến với Agoda! Chúng tôi tự hào mang đến những trải nghiệm du lịch độc đáo và đầy cảm hứng. Với các tour đa dạng từ trong nước đến quốc tế, chúng tôi cam kết mang đến cho bạn những hành trình thú vị, dịch vụ chuyên nghiệp và những kỷ niệm khó quên. Hãy để chúng tôi đồng hành cùng bạn khám phá thế giới!</p>
              </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box'>
                <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box hero__video-box mt-4 '>
              <video src={heroVideo} alt controls></video>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
                <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* hero section  */}
   <section>
   <Container>
     <Row>
       <Col lg='3'>
         <h5 className="services__subtitle">Khám phá ngay!</h5>
         <h2 className='services__title'>
           Agoda cung cấp những dịch vụ tốt nhất
         </h2>
       </Col>
       <ServiceList />
     </Row>
   </Container>
  </section>
  {/* Featured tour section start */}
    <section>
      <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>
                Tours nổi bật của chúng tôi
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
      </Container>
    </section>
  {/* Featured tour section end */}
  {/* experience section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Chinh phục mọi hành trình'}/>
              <h2 className=''>
                Với tất cả kinh nghiệm của chúng tôi <br /> Chúng tôi sẽ tận tâm phục vụ bạn              </h2>
              <p>Với nhiều năm kinh nghiệm trong ngành du lịch, chúng tôi tự hào mang đến những chuyến đi đáng nhớ và an toàn nhất.  <br/> Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng giúp bạn khám phá thế giới với sự tự tin và yên tâm tuyệt đối.</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12+</span>
                <h6>Chuyến đi thành công mỗi tuần</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Khách hàng thường xuyên</h6>
              </div>
              <div className="counter__box">
                <span>15+</span>
                <h6>Năm kinh nghiệm tổ chức lữ hành</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  {/* experience section end  */}
  {/* gallery section start */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className='gallery__title'>Khám phá ngay những địa danh <br/> qua những tấm ảnh thú vị</h2>
        </Col>
        <Col lg='12'>
          <MasonrylImageGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  {/* gallery section end  */}
  {/* testimonial section start */}
    <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans love !! '}/>
              <h2 className='testimonial__title'>
                Cảm nhận của khách hàng
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
    </section>
  {/* testimonial section end  */}
  <Newsletter />
  </>
  )
   
   
}

export default Home