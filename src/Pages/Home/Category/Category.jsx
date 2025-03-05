import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import service from "../../../assets/home/chef-service.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
const Category = () => {
    return (
        <div>
            <div className='text-center p-20'>
                <p className='text-orange-300'>---From 11:00am to 10:00pm---</p>
                <h1 className='text-4xl font-extrabold text-black  '>ORDER ONLINE</h1>
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
                <SwiperSlide>
                    <img src={slide1} alt="tasty" />
                    <h3 className="text-4xl uppercase text-center -mt-16">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="tasty" />
                    <h3 className="text-4xl uppercase text-center -mt-16">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="tasty" />
                    <h3 className="text-4xl uppercase text-center -mt-16">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="tasty" />
                    <h3 className="text-4xl uppercase text-center -mt-16">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="tasty" />
                    <h3 className="text-4xl uppercase text-center -mt-16"> veg Salads</h3>
                </SwiperSlide>

            </Swiper>
            <div className="relative p-20">
                <img className='w-[1320px] h-[572px]' src={service} alt="" />
                <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[1096px] h-[333.67px] rounded-2xl border-4   bg-white mx-auto'>
                    <h1 className='text-4xl items-center pt-20 font-extrabold text-black'>Bistro Boss</h1>
                    <p className='text-black pt-4'>Restaurants and chefs share a deeply interconnected relationship that is essential for the success of the food and hospitality industry. A restaurant provides the platform where the chef creativity and skills come to life.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;