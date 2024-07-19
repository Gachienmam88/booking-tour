import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImage from './GalleryImages'
const MasonrylImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
            {
                galleryImage.map((item,index)=>{
                    return (
                        <>
                        <img src={item} alt="" key={index} style={{width:'100%',display:'block',borderRadius:'10px'}}  className='masonry__img'/>
                        </>
                    )
                })
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonrylImageGallery