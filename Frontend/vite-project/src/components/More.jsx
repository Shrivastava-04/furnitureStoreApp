import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'
function More() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='pt-28 item-center justify-center text-center dark:bg-slate-900 dark:text-white'>
                <h1 className='text-2xl md:text-4xl '>
                    We are happy to have you <span className='text-blue-500'>here! :)</span>
                </h1>
                <p className='mt-12 text-1xl'>
                Your premier destination for high-quality, stylish furniture. We offer a wide range of beautifully crafted pieces, from luxurious leather sofas and elegant dining tables to modern queen beds and classic chairs. Our mission is to transform your living spaces with comfort and sophistication. Enjoy exclusive deals and free delivery on all orders. Explore our collection today and elevate your home with FurniEase, where quality meets elegance.
                </p>
                <Link to={'/'}>
                <button className='border-[2px] px-4 py-2 mt-12 bg-blue-500 rounded-lg text-white hover:bg-blue-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
                {list.map((item)=>(
                    <Cards key = {item.id} item = {item} />
                ))}
            </div>
        </div>
    </>
  )
}

export default More
