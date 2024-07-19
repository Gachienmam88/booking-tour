import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'
import SearchBar from '../shared/SearchBar'
import { Container,Row,Col } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
const Tours = () => {
  const [pageCount,setPageCount]=useState(0)
  const [page,setPage]=useState(0)
  const {data:tours,loading,error}=useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount}=useFetch(`${BASE_URL}/tours/search/getCountTours`)
  useEffect(()=>{
    const pages=Math.ceil(tourCount/8)
    setPageCount(pages)
    window.scrollTo(0,0)
  },[page,tourCount])
  return (
    <>
      <CommonSection title={'All tours'}/>
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        {!loading && !error && <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading ....</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
          <Row>
              {
                tours?.map((tour,index)=>{
                  return (
                    <>
                      <Col lg='3' md='6' sm='6' key={index}>
                        <TourCard tour={tour}/>
                      </Col>
                    </>
                  )
                })
              }
              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number)=>{
                    return (
                      <>
                        <span key={number} onClick={()=>setPage(number)} className={page===number?'active__page':''}>
                          {number+1}
                        </span>
                      </>
                    )
                  })}
                </div>
              </Col>
          </Row>
        </Container>}
      </section>
      <Newsletter/>
    </>
  )
}

export default Tours