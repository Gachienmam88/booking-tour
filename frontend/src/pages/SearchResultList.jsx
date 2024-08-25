import React, { useEffect, useState } from 'react'
import CommonSection from './../shared/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'
const SearchResultList = () => {
    const path_name=useLocation()
    const location=useLocation()
    const [data]=useState(location.state)
    useEffect(()=>{
        window.scrollTo(0,0)
      },[path_name])
  return (
    <>
        <CommonSection title={'Tour search result'} />
        <section>
            <Container>
                <Row>
                    {
                        data.length===0 ? <h4 className='text-center'>No tour found </h4> : data.map((item)=>{
                            return (
                                <>
                                    <Col key={item._id} lg='3' className='mb-4'  >
                                        <TourCard tour={item} />
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
        <Newsletter/>
    </>
  )
}

export default SearchResultList