import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import heroImg from "../assets/images/gallery-03.jpg";
import { MdDiversity2 } from "react-icons/md";
import { TbAsteriskSimple } from "react-icons/tb";
import { FaArrowUp, FaShieldAlt, FaTrophy } from "react-icons/fa";
import CollectiveImg from "../assets/images/tapthe2.jpg";
import "../styles/about.css";
import { AiOutlineTeam } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const About = () => {
  const path_name=useLocation()
  const featuredServices = [
    {
      subtitle: "Đa dạng và phong phú",
      desc: "Với mạng lưới chỗ ở rộng khắp, từ khách sạn sang trọng, khu nghỉ dưỡng, nhà nghỉ cho đến căn hộ tự phục vụ, Agoda mang đến sự lựa chọn đa dạng, phù hợp với mọi nhu cầu và ngân sách của khách hàng.",
      img: <MdDiversity2 />,
    },
    {
      subtitle: "Đơn giản và tiện lợi",
      desc: "Giao diện thân thiện, dễ sử dụng cùng với hệ thống đặt phòng nhanh chóng và bảo mật cao, giúp khách hàng tiết kiệm thời gian và công sức khi lên kế hoạch cho chuyến đi.",
      img: <TbAsteriskSimple />,
    },
    {
      subtitle: "Chất lượng và tin cậy",
      desc: "Agoda tự hào về dịch vụ khách hàng chuyên nghiệp, sẵn sàng hỗ trợ 24/7 để đảm bảo mọi vấn đề của khách hàng được giải quyết nhanh chóng và hiệu quả.",
      img: <FaShieldAlt />,
    },
  ];
  useEffect(()=>{
    window.scrollTo(0,0)
  },[path_name])
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle">
                  <Subtitle subtitle={"Giới thiệu về Agoda"} />
                </div>
                <h1>Giới thiệu về chúng tôi</h1>
                <p>
                  Chào mừng bạn đến với Agoda, nền tảng đặt phòng khách sạn và
                  dịch vụ du lịch hàng đầu thế giới. Được thành lập vào năm
                  2005, Agoda đã nhanh chóng trở thành một trong những công ty
                  du lịch trực tuyến phát triển nhanh nhất, với hơn 2 triệu
                  khách sạn và chỗ ở tại 200 quốc gia và vùng lãnh thổ.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__img">
                <img src={heroImg} alt="Agoda Hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end hero section */}
      <section>
        <Container>
          <div className="service__subtitle">
            <Subtitle subtitle={"Sứ mệnh của chúng tôi:"} />
            <p style={{ marginTop: "20px" }}>
              Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm du
              lịch tuyệt vời với giá cả hợp lý nhất. Agoda luôn nỗ lực không
              ngừng để cung cấp những giải pháp đặt phòng thông minh và tiện
              lợi, giúp khách hàng dễ dàng khám phá và trải nghiệm thế giới.
            </p>
          </div>
          <Row>
            {featuredServices.map((item, index) => (
              <Col lg="4" md="6" sm="12" key={index}>
                <div className="service__card mt-4">
                  <div className="service__card-icon">{item.img}</div>
                  <div className="service__card-subtitle">
                    <h5>{item.subtitle}</h5>
                  </div>
                  <p className="service__card-desc">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* history section */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <Subtitle subtitle={"Lịch sử hình thành"} />
              <h2 className="history__subtitle">
                Lịch sử và quá trình phát triển:
              </h2>
              <p className="history__desc">
                Agoda được thành lập tại Singapore vào năm 2005 bởi Michael
                Kenny và Robert Rosenstein. Ban đầu, công ty tập trung vào thị
                trường châu Á với chiến lược phát triển mạnh mẽ và nhanh chóng.
                Nhờ vào sự hiểu biết sâu sắc về thị trường địa phương và nhu cầu
                khách hàng, Agoda đã tạo dựng được uy tín và sự tin cậy trong
                ngành du lịch trực tuyến.
              </p>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="history__img">
                <img src={CollectiveImg} alt="Agoda Collective" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h3 className="history__subtitle">Thành tựu nổi bật:</h3>
          <Row>
            <Col lg='3' md='6' sm='6'>
                <div className="service__card mt-4">
                     <div className="service__card-icon">
                     <AiOutlineTeam />
                     </div>
                     <h5 className="service__card-subtitle">
                     Mạng lưới đối tác rộng khắp
                     </h5>
                     <p className="service-_card-desc">
                     Agoda hiện có quan hệ đối tác với hơn 2 triệu khách sạn và chỗ ở trên toàn thế giới, cung cấp cho khách hàng sự lựa chọn phong phú và đa dạng.
                     </p>
                </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
                <div className="service__card mt-4">
                     <div className="service__card-icon">
                     <IoPhonePortraitOutline />
                     </div>
                     <h5 className="service__card-subtitle">
                     Ứng dụng di động tiện lợi
                     </h5>
                     <p className="service-_card-desc">
                     Ứng dụng Agoda đã được tải về hàng triệu lần và nhận được nhiều đánh giá tích cực từ người dùng, nhờ vào tính tiện dụng và giao diện thân thiện.   
                     </p>
                </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
                <div className="service__card mt-4">
                     <div className="service__card-icon">
                     <FaTrophy />
                     </div>
                     <h5 className="service__card-subtitle">
                     Giải thưởng uy tín
                     </h5>
                     <p className="service-_card-desc">
                     Agoda đã nhận được nhiều giải thưởng uy tín trong ngành du lịch, như Giải thưởng World Travel Awards và Giải thưởng du lịch trực tuyến tốt nhất.
                     </p>
                </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
                <div className="service__card mt-4">
                     <div className="service__card-icon">
                     <FaArrowUp />
                     </div>
                     <h5 className="service__card-subtitle">
                     Phát triển bền vững
                     </h5>
                     <p className="service-_card-desc">
                     Agoda cam kết thực hiện các hoạt động kinh doanh bền vững và có trách nhiệm với môi trường, bao gồm các sáng kiến giảm thiểu tác động đến môi trường và hỗ trợ cộng đồng địa phương.
                     </p>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* concluding section */}
      <section>
        <Container>
          <div className="concluding__text">
            <h2>Khám phá thế giới cùng Agoda:</h2>
            <p>
              Dù bạn đang lên kế hoạch cho một kỳ nghỉ dưỡng dài ngày, một
              chuyến công tác ngắn hạn hay chỉ đơn giản là một chuyến đi khám
              phá, Agoda luôn sẵn sàng đồng hành cùng bạn. Hãy trải nghiệm sự
              tiện lợi và tin cậy khi đặt phòng với Agoda, và tận hưởng những
              chuyến du lịch đáng nhớ với mức giá tốt nhất.
            </p>
            <p>
              Cảm ơn bạn đã tin tưởng và lựa chọn Agoda. Chúng tôi hy vọng được
              phục vụ và mang đến cho bạn những trải nghiệm du lịch tuyệt vời
              trong thời gian tới.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
