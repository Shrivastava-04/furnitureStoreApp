import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import axios from 'axios';
import Cards from './Cards';
function Furniture() {
  const [furniture,setFurniture] = useState([])
    useEffect(()=>{
        const getFurniture =async()=>{
            try {
                const res = await axios.get("http://localhost:4001/furniture");
                console.log(res.data);
                const data= res.data.filter((data)=>data.where === "Home");
                setFurniture(data);
            } catch (error) {
                console.log(error);
            }
        }
        getFurniture();
    },[])  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='text-3xl font-semibold pb-2'>Our Products</h1>
    </div>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <Slider {...settings}>
        {
            furniture.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
    </Slider>
    </div>

  </>
  )
}

export default Furniture

