import React from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
import { BASE_URL } from '../../utils/config'
import useFetch from '../../hooks/useFetch'
const FeaturedTourList = () => {
    const {data:featuredTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
  return (

    <>
    {
        loading && <h4>
            Loading ........
        </h4>
    }
    {
        error && <h4>
            {error}
        </h4>
    }
    { !loading && !error &&
        featuredTours?.map((item,index)=>{
            return (
                <>
                    <Col className='mb-4' lg='3' md='6' sm='6' key={index}>
                        <TourCard tour={item} />
                    </Col>
                </>
            )
        })
    }
    </>
  )
}

export default FeaturedTourList