import React, { useEffect } from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { resetFetchStatus, fetchReview } from "../../redux/slices/reviewSlice";
import { Audio } from "react-loader-spinner";
import toast from "react-hot-toast";
const Testimonial = () => {
  const dispatch = useDispatch();
  const { reviews, statusGet, errorGet } = useSelector((state) => state.review);
  useEffect(() => {
    if(reviews.length===0){
        dispatch(fetchReview())
    }
    if(statusGet==='failed'){
        toast.error(errorGet)
        dispatch(resetFetchStatus())
    }
    if(statusGet==='succeed'){
        dispatch(resetFetchStatus())
    }
  }, [statusGet, dispatch, errorGet, reviews]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: true,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    {statusGet==='loading' && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>}
   
      <Slider {...settings}>
        {reviews.map((item) => {
          return (
            <>
              <div className="testimonial py-4 px-3" key={item._id}>
                <p>
                  {item?.reviewText}
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={item?.userImg?item.userImg:ava01} alt="" className="w-25 h-25 rounded-2" />
                  <div className="mb-0 mt-3">
                    <h6 className="mb-0 mt-3">{item?.username}</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Testimonial;
