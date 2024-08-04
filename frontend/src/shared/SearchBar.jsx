import React, { useRef } from 'react'
import './search-bar.css'
import {Col,Form,FormGroup} from 'reactstrap'
import { BASE_URL } from '../utils/config'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const SearchBar = () => {
    const locationRef=useRef('')
    const distanceRef=useRef(0)
    const maxGroupRef=useRef(0)
    const navigate=useNavigate()
    const SearchHandler= async ()=>{
        const location=locationRef.current.value
        const distance=distanceRef.current.value
        const maxGroupSize=maxGroupRef.current.value
        if(location==='' || distance===''||maxGroupSize===''){
            return toast.error('Vui lòng điền hết ở tất cả các trường')
        }
        const res= await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        if(!res.ok){
            toast.error('Có lỗi xảy ra vui lòng thử lại !')
        }
        const result =await res.json()
        navigate(`/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{
            state:result.data
        })
    }
  return (
    <Col lg='12'>
        <div className='search__bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-line"></i> 
                    </span>
                    <div>
                        <h6>Chọn địa điểm</h6>
                        <input type="text" placeholder='Where are you going ?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast' >
                    <span>
                        <i class="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Khoảng cách di chuyển </h6>
                        <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Số lượng người trong đoàn</h6>
                        <input type="number" placeholder='0' ref={maxGroupRef} />
                    </div>
                </FormGroup>
                <span className="search__icon" onClick={SearchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar