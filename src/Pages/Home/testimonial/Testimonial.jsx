import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Pagination, Navigation } from "swiper/modules";
import icon from '../../../assets/icon/quote-left 1.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="mb-32 mx-0 lg:mx-20">
      <div className="text-center pt-12  ">
        <p className="text-[#D99904]">---What Our Clients Say---</p>
        <hr className="h-4 mt-3 w-60 mx-auto" />
        <h1 className="text-3xl font-semibold">TESTIMONIALS</h1>
        <hr className="h-4 border-[#E8E8E8] border-t-2 mt-3 mb-4 w-60 mx-auto" />
      </div>

      <div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {review.map((rev) => (
            <SwiperSlide rev={rev}>
              <div className="flex flex-col items-center px-16">
              <Rating className="text-center mt-3"
      style={{ maxWidth: 180 }}
      value={rev.rating}
      readOnly
    />
    <img className="mt-3" src={icon} alt="" />
                <p>{rev.details}</p>
                <h1 className="text-[#D99904] mt-5 text-xl uppercase font-semibold">{rev.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
