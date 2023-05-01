import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image'

const WhatWeServe = () => {
    return (
        <section className="w-full px-24">
            <h2 className="text-[48px] font-semibold leading-[60px] ">What We Serve</h2>
            <div className="flex items-center justify-between">
                <p className="text-sm w-[50%] leading-[24px]">Discover more thant 100 Indoor plants for the Small-Space Gardener, and How to Care for Them Your home will be a plant paradise before you know it.</p>
                <button className=" px-6 py-3 bg-[#EF9219] text-white">
                    Explore All
                </button>
            </div>
            <div className='py-10'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                >
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant.png" alt="" fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant.png" alt="" fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant.png" alt="" fill />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-[400px]'>
                            <Image src="/images/restaurant.png" alt="" fill />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}


export default WhatWeServe