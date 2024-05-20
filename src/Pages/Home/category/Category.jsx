import { Swiper, SwiperSlide } from 'swiper/react';

import cate1 from "../../../assets/home/slide1.jpg"
import cate2 from "../../../assets/home/slide2.jpg"
import cate3 from "../../../assets/home/slide3.jpg"
import cate4 from "../../../assets/home/slide4.jpg"
import cate5 from "../../../assets/home/slide5.jpg"



import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
const Category = () => {
    return (
        <div className='mt-32 mb-32'>


<div className='text-center'>
<p className='text-[#D99904]'>---From 11:00am to 10:00pm---</p>
<hr className='h-4 mt-3 w-60 mx-auto' />
<h1 className='text-3xl font-semibold'>ORDER ONLINE</h1>
<hr className='h-4 mt-3 mb-4 w-60 mx-auto' />
</div>

                 <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='' src={cate1} alt="" />
        <h1 className='relative -mt-16 ml-24 text-2xl text-white uppercase'>Salads</h1></SwiperSlide>
        <SwiperSlide><img src={cate2} alt="" />
        <h1 className='relative -mt-16 ml-24 text-2xl text-white uppercase'>pizzas</h1></SwiperSlide>
        <SwiperSlide><img src={cate3} alt="" />
        <h1 className='relative -mt-16 ml-24 text-2xl text-white uppercase'>Soups</h1></SwiperSlide>
        <SwiperSlide><img src={cate4} alt="" />
        <h1 className='relative -mt-16 ml-24 text-2xl text-white uppercase'>desserts</h1></SwiperSlide>
        <SwiperSlide><img src={cate5} alt="" />
        <h1 className='relative -mt-16 ml-24 text-2xl text-white uppercase'>Salads</h1>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Category;