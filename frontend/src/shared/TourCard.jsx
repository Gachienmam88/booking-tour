import React from 'react'
import { Link } from 'react-router-dom'
import { Card,CardBody } from 'reactstrap'
import './tour-card.css'
import caculateAvgRating from '../utils/avgRating.js'
import formatToVND from '../utils/formatVnd.js'
const TourCard = ({tour}) => {
    const {_id,title,city,photo,price,featured,reviews}=tour
    const {totalRating,avgRating}=caculateAvgRating(reviews)
  return (
    <>
    <div className="tour__card">
        <Card>
            <div className='tour__img'>
                <img src={photo} alt="" />
                {featured&&<span>Nổi bật</span>}
            </div>
            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location d-flex align-items-center gap-1 '>
                     <i class="ri-map-pin-line"></i> {city}
                </span>
                <span className='tour__rating d-flex align-items-center gap-1 '>
                      <i class="ri-star-line"></i> {avgRating===0 ? null :avgRating } {totalRating===0?'Not rated' : <span>({reviews.length})</span>} 
                </span>
            </div>
            <h5 className='tour__title'>
                <Link to={`tours/${_id}`}>{title}</Link>
            </h5>
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h5>{formatToVND(price)} vnđ <span> / 1 người</span></h5>
                <button className='btn booking__btn'>
                    <Link className='' to={`/tours/${_id}`}>Đặt ngay</Link>
                </button>
            </div>
        </CardBody>
        </Card>

    </div>
    </>
  )
}

export default TourCard