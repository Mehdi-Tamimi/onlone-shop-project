
import Search from '@/components/pages/Home/search'

// import {Navigation, Pagination,Scrollbar, A11y} from 'Swiper/modules'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
// import {register} from 'swiper/element/bundle'
import Categories from '@/components/pages/Home/categories'


export default function Home() {
  
  return (
    <div className='container'>
      <div className='header'>
        <Search/>
      </div>
      <div className='w-full'>
        <Categories/>
      </div>
      
      

      
    </div>
  )
}
