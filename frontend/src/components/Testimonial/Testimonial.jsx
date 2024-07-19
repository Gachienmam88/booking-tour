import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:true,
        swipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                }
            },{
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }
        ]
    }
  return (
   <>
    <Slider {...settings} >
        <div className='testimonial py-4 px-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos ratione ipsam, laborum error nesciunt e</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mb-0 mt-3'>
                    <h6 className='mb-0 mt-3'>John wick</h6>
                    <p>Customer</p>
                </div>

            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos ratione ipsam, laborum error nesciunt e</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mb-0 mt-3'>
                    <h6 className='mb-0 mt-3'>Viet Hung Nguyen</h6>
                    <p>Customer</p>
                </div>

            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos ratione ipsam, laborum error nesciunt e</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mb-0 mt-3'>
                    <h6 className='mb-0 mt-3'>Viet Huong Nguyen</h6>
                    <p>Customer</p>
                </div>

            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos ratione ipsam, laborum error nesciunt e</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mb-0 mt-3'>
                    <h6 className='mb-0 mt-3'>Johny Dang</h6>
                    <p>Customer</p>
                </div>

            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos ratione ipsam, laborum error nesciunt e</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
                <div className='mb-0 mt-3'>
                    <h6 className='mb-0 mt-3'>Tuan Nguyen Anh Duc</h6>
                    <p>Customer</p>
                </div>

            </div>
        </div>
    </Slider>
   </>
  )
}

export default Testimonial