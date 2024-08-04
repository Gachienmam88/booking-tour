import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const serviceData=[
    {
        imgUrl:weatherImg,
        title:'Khám phá thế giới, bất chấp thời tiết.',
        desc:"Du lịch hoàn hảo với lịch trình đa dạng, bất kể mưa hay nắng. Công ty chúng tôi cam kết mang đến cho bạn những trải nghiệm tuyệt vời dù ở bất kỳ điều kiện thời tiết nào, đảm bảo an toàn và thoải mái cho mọi hành trình."
    },
    {
        imgUrl:guideImg,
        title:'Hành trình vui vẻ, hướng dẫn tận tâm.',
        desc:"Đồng hành tận tình cùng hướng dẫn viên giàu kinh nghiệm, chuyến đi trọn vẹn. Chúng tôi tự hào về đội ngũ nhân viên chuyên nghiệp, nhiệt tình và am hiểu sâu sắc về các điểm đến, luôn sẵn sàng hỗ trợ bạn trong suốt chuyến đi."
    },
    {
        imgUrl:customizationImg,
        title:'Du lịch mơ ước, giá cực rẻ.',
        desc:"Tour chất lượng, giá cả hợp lý, mang đến trải nghiệm du lịch tuyệt vời. Với chính sách giá minh bạch và cạnh tranh, chúng tôi đảm bảo bạn sẽ có những chuyến du lịch đáng nhớ mà không lo về chi phí."
    },
]
const ServiceList = () => {

  return (<>
    {
        serviceData.map((item,index)=>{
            return (
                <>
                    <Col lg='3' md='6' sm='12' className='mb-4' key={index}  >
                        <ServiceCard item={item} />
                    </Col>
                </>
            )
        })
    }
    </>
  )
}

export default ServiceList