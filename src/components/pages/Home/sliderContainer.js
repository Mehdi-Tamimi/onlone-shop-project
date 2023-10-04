'use client'
import  { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper/modules'
import Card from "./card";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y'


export default function SliderContainer({title,books}) {


    return (
        <div className="w-full">
            <div className="sliderContainer__header">
                <span className="sliderTitle">
                    {title}
                </span>
                <hr className="hr"/>
            </div>
            <Swiper
                initialSlide = {3}
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={15}
                navigation={true}
                modules={[Navigation,Pagination, Scrollbar,A11y]}
            >
                {
                    books.map(book => <SwiperSlide><Card title={book.title} price={book.price}/></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}