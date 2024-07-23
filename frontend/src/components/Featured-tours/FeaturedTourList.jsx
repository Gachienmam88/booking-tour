import React, { useEffect } from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  resetStatus } from '../../redux/slices/tour';

const FeaturedTourList = () => {
    const dispatch = useDispatch();
    const { featuredTours, status, error } = useSelector(state => state.tour);

   // Thêm dependency array để tránh gọi nhiều lần không cần thiết

    useEffect(() => {
        if (status === 'failed' || status === 'succeed') {
            dispatch(resetStatus());
        }
    }, [status, dispatch]); // Dependency array để xử lý khi status thay đổi

    if (status === 'loading') {
        return <h4>Loading....</h4>;
    }

    if (status === 'failed') {
        alert(error); // Cân nhắc sử dụng một component thông báo thay vì alert
        return null; // Ngừng render phần còn lại nếu lỗi
    }

    return (
        <>
            { featuredTours?.map((item, index) => (
                <Col className='mb-4' lg='3' md='6' sm='6' key={index}>
                    <TourCard tour={item} />
                </Col>
            ))}
        </>
    );
};

export default FeaturedTourList;